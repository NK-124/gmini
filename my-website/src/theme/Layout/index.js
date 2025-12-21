// src/theme/Layout/index.js
import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';
import { useLocation } from '@docusaurus/router';

export default function LayoutWrapper(props) {
  const location = useLocation();

  useEffect(() => {
    const body = document.body;

    // Remove all specific background classes to reset
    body.classList.remove('homepage-background', 'docs-background');

    // Apply class based on current path
    if (location.pathname === '/robotics-book/' || location.pathname === '/') {
      body.classList.add('homepage-background');
    } else if (location.pathname.includes('intro-to-ros2')) { // Use includes for more robust matching
      body.classList.add('intro-to-ros2-background');
    } else {
      body.classList.add('docs-background');
    }
  }, [location.pathname]);

  return (
    <Layout {...props}>
      {props.children}
    </Layout>
  );
}
