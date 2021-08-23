const fs = require('fs');
const path = require('path');

const localizedUrls = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src', 'pages.json')),
);

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  localizedUrls.map(lang => {
    lang.pages.map(page => {
      const fixedLocale = lang.locale === 'en' ? 'en-US' : 'da-DK';
      createPage({
        path: lang.pathPrefix + page.slug,
        component: path.resolve(`./src/templates/${page.componentName}.tsx`),
        context: {
          locale: fixedLocale,
          pagePath: lang.pathPrefix + page.slug,
          componentName: page.componentName,
        },
      });
    });
  });
};
