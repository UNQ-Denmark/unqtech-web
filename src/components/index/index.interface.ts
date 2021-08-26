import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IHomePage {
    title: string
    keywords: string[]
    image: {gatsbyImageData: IGatsbyImageData}
    headlineAnimationList: string[]
    headImage: {gatsbyImageData: IGatsbyImageData}
}