import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import '@site/src/css/robot.css';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const robotContainerRef = React.useRef(null);
  const leftEyeRef = React.useRef(null);
  const rightEyeRef = React.useRef(null);

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      if (robotContainerRef.current && leftEyeRef.current && rightEyeRef.current) {
        const { clientX, clientY } = event;
        const { left, top, width, height } = robotContainerRef.current.getBoundingClientRect();

        const x = (clientX - left - width / 2) / (width / 2);
        const y = (clientY - top - height / 2) / (height / 2);

        const eyeMovement = 5; // Max movement in pixels

        leftEyeRef.current.style.transform = `translateX(${x * eyeMovement}px) translateY(${y * eyeMovement}px)`;
        rightEyeRef.current.style.transform = `translateX(${x * eyeMovement}px) translateY(${y * eyeMovement}px)`;
      }
    };

    const container = robotContainerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

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
                      <div className={styles.buttons} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-60px'}}>
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
                      {/* Start Robot HTML Structure */}
                      <div className="robot-container" ref={robotContainerRef}>
                          {/* Head Assembly */}
                          <div className="robot-body-part robot-head">
                              <div className="robot-eye robot-eye-left" ref={leftEyeRef}></div>
                              <div className="robot-eye robot-eye-right" ref={rightEyeRef}></div>
                              <div className="robot-mouth"></div>
                              <div className="robot-antenna robot-antenna-left"></div>
                              <div className="robot-antenna robot-antenna-right"></div>
                          </div>
                          {/* Torso Assembly */}
                          <div className="robot-body-part robot-torso">
                              {/* Left Arm Assembly */}
                              <div className="robot-joint robot-shoulder-left"></div>
                              <div className="robot-arm-assembly robot-arm-assembly-left">
                                  <div className="robot-body-part robot-upper-arm"></div>
                                  <div className="robot-joint robot-elbow-left"></div>
                                  <div className="robot-body-part robot-forearm"></div>
                                  <div className="robot-joint robot-wrist-left"></div>
                                  <div className="robot-body-part robot-hand"></div>
                              </div>
                              {/* Right Arm Assembly */}
                              <div className="robot-joint robot-shoulder-right"></div>
                              <div className="robot-arm-assembly robot-arm-assembly-right">
                                  <div className="robot-body-part robot-upper-arm"></div>
                                  <div className="robot-joint robot-elbow-right"></div>
                                  <div className="robot-body-part robot-forearm"></div>
                                  <div className="robot-joint robot-wrist-right"></div>
                                  <div className="robot-body-part robot-hand"></div>
                              </div>
                              {/* Left Leg Assembly */}
                              <div className="robot-joint robot-hip-left"></div>
                              <div className="robot-leg-assembly robot-leg-assembly-left">
                                  <div className="robot-body-part robot-upper-leg"></div>
                                  <div className="robot-joint robot-knee-left"></div>
                                  <div className="robot-body-part robot-shin"></div>
                                  <div className="robot-joint robot-ankle-left"></div>
                                  <div className="robot-body-part robot-foot"></div>
                              </div>
                              {/* Right Leg Assembly */}
                              <div className="robot-joint robot-hip-right"></div>
                              <div className="robot-leg-assembly robot-leg-assembly-right">
                                  <div className="robot-body-part robot-upper-leg"></div>
                                  <div className="robot-joint robot-knee-right"></div>
                                  <div className="robot-body-part robot-shin"></div>
                                  <div className="robot-joint robot-ankle-right"></div>
                                  <div className="robot-body-part robot-foot"></div>
                              </div>
                          </div>
                      </div>
                      {/* End Robot HTML Structure */}


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
