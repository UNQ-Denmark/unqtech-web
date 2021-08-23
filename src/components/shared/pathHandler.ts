import { navigate } from 'gatsby'
import pages from '../../pages'

const navigateTo = (locale: string, componentName: string): void => {
    const fixedLocale = locale ===  "en-US" ? "en" : "da"
    const chunk = pages.find(x => x.locale.toLowerCase() === fixedLocale)
    if (!chunk) throw Error('Locale not supported')
    const page = chunk.pages.find(page => page.componentName === componentName)
    chunk.pathPrefix.length > 0 ? navigate(`/${chunk.pathPrefix}${page?.slug}`) : navigate(`${page?.slug}`)
}

export default navigateTo