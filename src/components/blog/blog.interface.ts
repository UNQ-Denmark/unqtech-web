import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IBlogPost {
    slugName: string
    title: string
    type: string
    date: string
    timeToRead: number
    content?: any
    image: {gatsbyImageData: IGatsbyImageData}
    author: IAuthor
}

export interface IBlogPostCard {
    slugName: string
    title: string
    type: string
    image: {gatsbyImageData: IGatsbyImageData}
    intro: {intro: string}
    date: string
    timeToRead: string
}

export interface IAuthor {
    name: string
    image: {gatsbyImageData: IGatsbyImageData}
    description: { description: string }
    instagram?: string
    linkedIn?: string
}