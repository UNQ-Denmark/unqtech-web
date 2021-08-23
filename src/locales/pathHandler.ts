import pages from '../../src/pages'
import { navigate } from 'gatsby'

const navigateTo = (obj: {locale: string}, componentName: string): void => {
    const fixedLocale = obj.locale ===  "en-US" ? "en" : "da"
    const chunk = pages.find(x => x.locale.toLowerCase() === fixedLocale)
    if (!chunk) throw Error('Locale not supported')
    const page = chunk.pages.find(page => page.componentName === componentName)
    chunk.pathPrefix.length > 0 ? navigate(`/${chunk.pathPrefix}${page?.slug}`) : navigate(`${page?.slug}`)
}

export default navigateTo