import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { postToChat } from '../services/api';
import '../css/rag-chatbot.css'; // Import the new CSS

const RagChatbotPage = () => {
  const { siteConfig } = useDocusaurusContext();
  const backendUrl = siteConfig.customFields.backendUrl;

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const messageListRef = useRef(null);

  // Function to send a message
  const sendMessage = useCallback(async (text, source = 'text-selection') => {
    if (!text.trim()) return;

    // Use a function for state update to get the latest state
    setMessages(prevMessages => [...prevMessages, { text, sender: 'user' }]);
    
    if (source === 'user_input') {
        setQuery('');
    }
    setIsLoading(true);

    try {
      const response = await postToChat(backendUrl, { query: text, source });
      const botMessage = {
        text: response.answer,
        sender: 'bot',
        citation: response.citation,
      };
      setMessages(currentMessages => [...currentMessages, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage = {
        text: 'Sorry, something went wrong trying to contact the backend.',
        sender: 'bot',
      };
      setMessages(currentMessages => [...currentMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [backendUrl]);

  // Effect to handle initial query from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const initialQuery = searchParams.get('query');
    if (initialQuery) {
      // Add a system message to indicate the context
      setMessages([{ text: `Asking about: "${initialQuery}"`, sender: 'system' }]);
      sendMessage(initialQuery, 'text-selection');
      // Optional: Clear the URL query parameter after using it
      // window.history.replaceState({}, '', '/rag-chatbot');
    }
  }, [location.search]);
  
    // Effect to scroll to the bottom of the message list
    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, [messages]);


  const handleManualSend = () => {
      sendMessage(query, 'user_input');
  }

  return (
    <Layout title="RAG Chatbot">
      <div className="rag-chatbot-page-container">
        <div className="rag-message-list" ref={messageListRef}>
          {messages.map((message, index) => (
            <div key={index} className={`rag-message ${message.sender}`}>
              <p>{message.text}</p>
              {message.citation && <p className="rag-citation">{message.citation}</p>}
            </div>
          ))}
          {isLoading && (
            <div className="rag-message bot">
              <p>...</p>
            </div>
          )}
        </div>
        <div className="rag-chat-input">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleManualSend()}
            placeholder="Ask a follow-up question..."
          />
          <button onClick={handleManualSend}>Send</button>
        </div>
      </div>
    </Layout>
  );
};

export default RagChatbotPage;
