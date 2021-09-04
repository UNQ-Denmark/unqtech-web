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
  hasBtn?: boolean
  btnLink?: string
}

export interface IContactForm {
  title: string
  successMsg: string
  errorMsg: string
  namePh: string
  emailPh: string
  msgPh: string
  contactBtn: string
  image: {
    gatsbyImageData: IGatsbyImageData;
  }
  node_locale: string
}

export interface IWebSite {
  title: string;
  headline: string;
  subHeadline: string;
  headImage: {
    gatsbyImageData: IGatsbyImageData;
  };
  keywords: string[];
  sections: ISection[];
  features: ISection[];
  seoImage: {
    file: {
      url: string;
    };
  };
  seoDescription: {
    seoDescription: string;
  };
}

export interface IHostingPage {
  title: string;
  headline: string;
  subHeadline: string;
  headImage: {
    gatsbyImageData: IGatsbyImageData;
  };
  keywords: string[];
  sections: ISection[];
  features: ISection[];
  seoImage: {
    file: {
      url: string;
    };
  };
  seoDescription: {
    seoDescription: string;
  };
}
