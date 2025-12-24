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
            <div className={styles.buttons} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div style={{display: 'flex', flexDirection: 'row', marginBottom: '1rem'}}>
                <Link
                  className="button button--secondary button--lg"
                  to="/module1/introduction-to-ros2/what-is-ros2"
                  style={{marginRight: '1rem'}}>
                  Module 1
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  to="/module2/introduction-to-digital-twins/what-is-a-digital-twin">
                  Module 2
                </Link>
              </div>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <Link
                  className="button button--secondary button--lg"
                  to="/module3/introduction-to-ai-robot-brain/what-is-nvidia-isaac-platform"
                  style={{marginRight: '1rem'}}>
                  Module 3
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  to="/module4/introduction-to-vision-language-action/the-convergence-of-llms-and-robotics">
                  Module 4
                </Link>
              </div>
            </div>
          </div>

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
