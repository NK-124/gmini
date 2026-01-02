import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './styles.module.css';
import { postToChat } from '../../services/api';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Chatbot = () => {
  // --- Text Selection Logic ---
  const [askAiButtonPosition, setAskAiButtonPosition] = useState({ top: 0, left: 0 });
  const [textSelection, setTextSelection] = useState('');

  const handleSelection = useCallback(() => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      const text = selection.toString().trim();
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setTextSelection(text);
      setAskAiButtonPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    } else {
      setTextSelection('');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('selectionchange', handleSelection);
    return () => {
      document.removeEventListener('selectionchange', handleSelection);
    };
  }, [handleSelection]);


  // --- Chatbot Logic ---
  const { siteConfig } = useDocusaurusContext();
  const backendUrl = siteConfig.customFields.backendUrl;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState('global');
  const messageListRef = useRef(null);

  const handleAskAiRequest = useCallback(async (text) => {
    setIsOpen(true);
    setMode('selected_text');
    const newMessages = [{ text: `Asking about: "${text}"`, sender: 'system' }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await postToChat(backendUrl, { query: text, source: 'text-selection' });
      const botMessage = {
        text: response.answer,
        sender: 'bot',
        citation: response.citation,
      };
      setMessages(current => [...current, botMessage]);
    } catch (error) {
      const errorMessage = {
        text: 'Sorry, something went wrong. ' + error.message,
        sender: 'bot',
      };
      setMessages(current => [...current, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [backendUrl]);
  
  const handleAskAiClick = useCallback(() => {
    if (textSelection) {
      handleAskAiRequest(textSelection);
      setTextSelection(''); // Hide the button
    }
  }, [textSelection, handleAskAiRequest]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!query.trim()) return;

    const currentQuery = query;
    // Use functional updates for both user message and bot response
    setMessages(current => [...current, { text: currentQuery, sender: 'user' }]);
    setQuery('');
    setIsLoading(true);

    try {
      const response = await postToChat(backendUrl, { query: currentQuery, source: 'global' });
      const botMessage = {
        text: response.answer,
        sender: 'bot',
        citation: response.citation,
      };
      setMessages(current => [...current, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage = {
        text: 'Sorry, something went wrong.',
        sender: 'bot',
      };
      setMessages(current => [...current, errorMessage]);
    } finally {
      setIsLoading(false);
      setMode('global');
    }
  };

  // Effect to scroll to the bottom of the message list
  useEffect(() => {
    if (messageListRef.current) {
        messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);


  return (
    <>
      {/* Render the Ask AI button */}
      {textSelection && (
        <div 
          className={styles.askAiButton} 
          style={{ top: askAiButtonPosition.top, left: askAiButtonPosition.left }} 
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleAskAiClick}
        >
          Ask AI
        </div>
      )}

      {/* Render the Chatbot UI */}
      <div className={`${styles.chatbotContainer} chatbot-container`}>
        {isOpen && (
          <div className={styles.chatWindow} ref={messageListRef}>
            <div className={styles.chatHeader}>
              <h2>RAG Chatbot ({mode})</h2>
              {mode === 'selected_text' && (
                <button onClick={() => {
                  setMode('global');
                  setMessages([]);
                }} className={styles.modeButton}>
                  Switch to Global
                </button>
              )}
              <button onClick={toggleChat} className={styles.closeButton}>X</button>
            </div>
            <div className={styles.messageList}>
              {messages.map((message, index) => (
                <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
                  <p>{message.text}</p>
                  {message.citation && <p className={styles.citation}>{message.citation}</p>}
                </div>
              ))}
              {isLoading && <div className={`${styles.message} ${styles.bot}`}>...</div>}
            </div>
            <div className={styles.chatInput}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask a question..."
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        )}
        <button onClick={toggleChat} className={styles.chatToggleButton}>
          {isOpen ? 'Close' : <img src="/img/5611979.png" alt="Chat" style={{ width: '38px', height: '38px' }} />}
        </button>
      </div>
    </>
  );
};

export default Chatbot;
