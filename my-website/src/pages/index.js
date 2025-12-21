import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const MOCKUP_MAGAZINE_IMAGE_URL = "https://media.istockphoto.com/id/2218725420/photo/mockup-magazine-on-green-grass-background.jpg?s=1024x1024&w=is&k=20&c=rio44ZIPLZGpQ1H9katre1TDcNXQKfa4zPSZKUuWq5I=";

  const handleStartReadingClick = () => {
    localStorage.setItem('alternateBackground', 'true');
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <img src="img/logo.svg" alt="Docusaurus Logo" style={{height: '1em', verticalAlign: 'middle', marginRight: '0.5em'}} />
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}>
          <div style={{display: 'flex', alignItems: 'center', marginRight: '5rem'}}> {/* New container for button and new image */}
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/robotics-book/module1/introduction-to-ros2/what-is-ros2"
                onClick={handleStartReadingClick}>
                Start Reading
              </Link>
            </div>
            <img className="light-mode-image" src={MOCKUP_MAGAZINE_IMAGE_URL} alt="Mockup Magazine" style={{height: '300px', marginLeft: '1rem'}}/>
          </div>
          <img className="book-display-image" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJvb2tzfGVufDB8fDB8fHww" alt="Books" style={{maxWidth: '40%'}}/>
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
