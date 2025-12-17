// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Robotic Nervous System (ROS 2)',
  tagline: 'AI students and developers entering humanoid robotics',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/robotics-book/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
        document.addEventListener('DOMContentLoaded', function() {
          const BACKGROUND_CLASSES = [
            null, // No special background
            'has-bg-1',
            'has-bg-2',
            'has-bg-3',
          ];
          const savedBgIndex = parseInt(localStorage.getItem('currentBackgroundIndex') || '0', 10);
          const bgClass = BACKGROUND_CLASSES[savedBgIndex];
          if (bgClass) {
            document.body.classList.add(bgClass);
          }
        });
      `,
    },
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to set "zh-Hans" instead of "en".





  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: 'default', // Explicitly set the ID for the default docs plugin instance
          path: 'docs', // Explicitly set the path to the English docs
          routeBasePath: '/', // Ensure docs are at the root of the /docs/ path
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'The Robotic Nervous System (ROS 2)',
        logo: {
          alt: 'My book',
          src: 'img/logo.svg',
          width: '48px',
          height: '48px',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro-to-ros2',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'customBackgroundChanger', // Use the custom type defined in ComponentTypes.js
            position: 'right',
          },


          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro-to-ros2',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [

              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
