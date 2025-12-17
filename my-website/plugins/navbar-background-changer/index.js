const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'navbar-background-changer-plugin',
    configureWebpack(config, isServer) {
      return {
        resolve: {
          alias: {
            // This alias ensures that when Docusaurus tries to resolve 'CustomBackgroundChanger'
            // it points to our actual component file.
            // Adjust the path to be relative from the docusaurus.config.js file or root
            '@theme/CustomBackgroundChanger': path.resolve(context.siteDir, 'src/theme/NavbarItem/Component/CustomBackgroundChanger.js'),
          },
        },
      };
    },
  };
};