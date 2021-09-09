import { IGatsbyImageData } from "gatsby-plugin-image";
import { ISection } from "../shared/contentful.interface";

export interface IHomePage {
    title: string
    keywords: string[]
    seoImage: {file: {
        url: string
      }
    }
    seoDescription: {
      seoDescription: string;
    };
    headlineAnimationList: string[]
    refImage: [{gatsbyImageData: IGatsbyImageData, title: string, description: string}]
    sections: ISection[];
    features: ISection[];
}