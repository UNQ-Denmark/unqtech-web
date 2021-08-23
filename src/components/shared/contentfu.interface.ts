import { GatsbyImageFluidProps } from "gatsby-image";

export interface ISimpleSection {
  title?: string
  section: ContentfulRichText;
  img: GatsbyImageFluidProps
}

export interface ContentfulRichText {
  childContentfulRichText: {
    html: string;
  };
}

export interface HomePage {
  title: string
  subtitle: string
  introHeadline: string
  coverImg: GatsbyImageFluidProps
  introText: {
    introText: string
  }
  sections: ISimpleSection[]
}


export interface IServicePage {
  title: string
  sections: ISimpleSection[]
}

export interface IAboutPage {
  title: string
  text: {
    text: string
  }
}