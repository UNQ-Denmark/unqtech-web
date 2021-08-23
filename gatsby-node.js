const fs = require('fs');
const path = require('path');

const localizedUrls = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src', 'pages.json')),
);

exports.createPages = async ({ actions, graphql, reporter  }) => {
  const blog = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          slugName
        }
      }
    }
  `)

  if (blog.errors) {
    reporter.panic("Error loading article", JSON.stringify(blog.errors))
  }

  blog.data.allContentfulBlogPost.nodes.forEach(post => {
    actions.createPage({
      path: `/blog/${post.slugName.toLowerCase()}/`,
      component: require.resolve("./src/templates/blogpost.tsx"),
      context: {
        pagePath: post.slugName,
      },
    })
  })
  
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
