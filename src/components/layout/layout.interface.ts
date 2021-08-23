import { IGatsbyImageData } from "gatsby-plugin-image";

export interface INavigationData {
    nodes: INavigation[];
  }
  
export interface INavigation  {
    node_locale: string;
    title: string;
    backgroundColor?: string
    logo: {gatsbyImageData: IGatsbyImageData}
    enFlag: {gatsbyImageData: IGatsbyImageData}
    daFlag: {gatsbyImageData: IGatsbyImageData}
  }