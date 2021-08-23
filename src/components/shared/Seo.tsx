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
      <meta name="image" content={seo.image} />
      {seo.siteUrl && <meta property="og:url" content={seo.siteUrl} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && ( <meta property="og:description" content={seo.description} /> )}
      {seo.keywords && <meta property="keywords" content={seo.keywords} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && ( <meta name="twitter:description" content={seo.description} /> )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

Seo.defaultProps = {
  title: 'HighView',
  description: `HighView ApS - Vi tilbyder professionelle sikkerheds løsninger, herunder ADK OG AIA anlæg`,
  lang: `da`,
  meta: [],
  image: PropTypes.string,
  keywords: ["AIA", "ADK", "Privat", "Sikkerhed", "IT Sikkerhed", "NOX alarmanlæg", "Jablotron JA100", "HighView", "Overvågning", "Erhvers sikkerhed", "adgangskontrolanlæg" ],
  siteUrl: "https://highview.dk/"
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
