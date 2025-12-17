import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const BACKGROUND_CLASSES = [
  null, // No special background
  'has-bg-1',
  'has-bg-2',
  'has-bg-3',
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

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

  const handleStartReadingClick = () => {
    const defaultBgIndex = 1; // Or any other default background
    localStorage.setItem('currentBackgroundIndex', defaultBgIndex.toString());
    applyBackground(BACKGROUND_CLASSES[defaultBgIndex]);
  };

  const handleBackgroundChangeClick = () => {
    let currentBgIndex = parseInt(localStorage.getItem('currentBackgroundIndex') || '0', 10);
    currentBgIndex = (currentBgIndex + 1) % BACKGROUND_CLASSES.length;
    localStorage.setItem('currentBackgroundIndex', currentBgIndex.toString());
    applyBackground(BACKGROUND_CLASSES[currentBgIndex]);
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro-to-ros2"
            onClick={handleStartReadingClick}>
            Start Reading
          </Link>
          <button
            className="button button--secondary button--lg"
            onClick={handleBackgroundChangeClick}>
            Change Background
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
