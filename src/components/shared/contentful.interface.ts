import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IWebShop {
  title: string;
  headline: string;
  subHeadline: string;
  headImage: {
    gatsbyImageData: IGatsbyImageData;
  };
  keywords: string[];
  sections: ISection[];
  features: ISection[];
  security: ISection;
  seoImage: {
    file: {
      url: string;
    };
  };
  seoDescription: {
    seoDescription: string;
  };
}

export interface ISection {
  title: string;
  image: {
    title: string
    gatsbyImageData: IGatsbyImageData;
  };
  description: {
    description: string;
  };
}
