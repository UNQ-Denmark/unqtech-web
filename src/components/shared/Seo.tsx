import { graphql, useStaticQuery } from 'gatsby';

import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

type MetaProps = JSX.IntrinsicElements['meta'];


interface Props {
  description?: string;
  lang?: string;
  meta?: MetaProps[];
  title: string;
  image: string;
  keywords?: string[]
  pathname?: string
}

const Seo = ({ title, description, image, meta, lang, keywords, pathname}: Props) => {
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    siteUrl: `${siteUrl}`,
    keywords: `${keywords}`,
    pathname: pathname || ''
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate} htmlAttributes={{lang}}>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta property="keywords" content={seo.keywords} />}

      {/* Google search engine */}
      <meta itemProp="name" content={seo.title} />
      <meta itemProp="description" content={seo.description} />
      <meta itemProp="image" content={seo.image} />

      {/* facebook card */}
      {seo.siteUrl && <meta property="og:url" content={seo.siteUrl} />}
      <meta property="og:type" content="website" />
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && ( <meta property="og:description" content={seo.description} /> )}
      {seo.image && <meta property="og:image" content={seo.image} />}

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && ( <meta name="twitter:description" content={seo.description} /> )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

Seo.defaultProps = {
  title: 'UNQTech',
  description: `UNQTech - We love tech`,
  lang: `da`,
  meta: [],
  image: PropTypes.string,
  keywords: ["vine", "wine", "Rødvin", "Hvidvin", "Rosé", "Bourgogne", "Beaujolais", "Jean-Paul Brun - Beaujolais", "Domaine Cheveau", "Domaine Saint Jean de Villecroze", "Lauraire des Lys - Minervois", "Økologisk vine"],
  siteUrl: "https://unqtech.dk/"
};

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
      }
    }
  }
`;

export default Seo;
