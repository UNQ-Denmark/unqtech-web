import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IBlogPostCard {
    slugName: string
    title: string
    type: string
    image: {gatsbyImageData: IGatsbyImageData}
    intro: {intro: string}
    date: string
    timeToRead: string
}

export interface IBlogPage {
    title: string
    keywords: string[]
    seoImage: {
        gatsbyImageData: IGatsbyImageData
        file: {
            url: string
          }
        }
    headline: {intro: string}
    subHeading: {subHeading: string}
}

export interface IAuthor {
    name: string
    image: {gatsbyImageData: IGatsbyImageData}
    description: { description: string }
    instagram?: string
    linkedIn?: string
}
export interface IBlogPost {
    title: string
    slugName: string
    type: string
    date: string
    intro: {
      intro: string
    }
    content: any
    image: {
      gatsbyImageData: IGatsbyImageData
      title: string
      file: {
        url: string
      }
    }
    author: IAuthor
    tags: string[]
    lang: string
}