import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from '@docusaurus/router';
import './styles.css';

const AskAIButton = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [visible, setVisible] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const history = useHistory();

  const handleSelection = useCallback(() => {
    const selection = window.getSelection();
    const text = selection.toString().trim();

    if (text) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX + (rect.width / 2) - 50, // Center the button
      });
      setSelectedText(text);
      setVisible(true);
    } else {
      // A small delay to allow click event to register before hiding the button
      setTimeout(() => {
        const newSelection = window.getSelection().toString().trim();
        if (!newSelection) {
          setVisible(false);
        }
      }, 200);
    }
  }, []);

  const handleButtonClick = () => {
    if (selectedText) {
      history.push(`/rag-chatbot?query=${encodeURIComponent(selectedText)}`);
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleSelection);
    return () => {
      document.removeEventListener('mouseup', handleSelection);
    };
  }, [handleSelection]);

  if (!visible) {
    return null;
  }

  return (
    <button
      className="ask-ai-button"
      style={{ top: `${position.top}px`, left: `${position.left}px`, display: 'block' }}
      onClick={handleButtonClick}
    >
      Ask AI
    </button>
  );
};

export default AskAIButton;
