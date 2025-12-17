import React, { useEffect } from 'react';

const BACKGROUND_CLASSES = [
  null, // No special background
  'has-bg-1',
  'has-bg-2',
  'has-bg-3',
];

function BackgroundChanger() {
  const applyBackground = (bgClass) => {
    document.body.classList.remove(...BACKGROUND_CLASSES.filter(Boolean));
    if (bgClass) {
      document.body.classList.add(bgClass);
    }
  };

  useEffect(() => {
    // Apply background on initial load based on localStorage
    const savedBgIndex = parseInt(localStorage.getItem('currentBackgroundIndex') || '0', 10);
    applyBackground(BACKGROUND_CLASSES[savedBgIndex]);
  }, []);

  const handleBackgroundChangeClick = () => {
    let currentBgIndex = parseInt(localStorage.getItem('currentBackgroundIndex') || '0', 10);
    currentBgIndex = (currentBgIndex + 1) % BACKGROUND_CLASSES.length;
    localStorage.setItem('currentBackgroundIndex', currentBgIndex.toString());
    applyBackground(BACKGROUND_CLASSES[currentBgIndex]);
  };

  return (
    <button
      className="button button--secondary button--sm" // Added button--sm for smaller size in navbar
      onClick={handleBackgroundChangeClick}
      style={{ marginLeft: '10px' }} // Add some spacing from other navbar items
    >
      Change Background
    </button>
  );
}

export default BackgroundChanger;
