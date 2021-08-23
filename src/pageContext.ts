export interface PageContext {
    locale: string
    componentName: string
    pagePath: string
}

export interface HasPageContext {
    pageContext: PageContext
}