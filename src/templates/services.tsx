import { SiteContent, SiteLayout } from '../components/layout/layout'

import { PageContext } from '../pageContext'
import React from 'react'
import Seo from '../components/shared/Seo'

type Props = {
  pageContext: PageContext;
}

const ServicePage: React.FC<Props> = ({pageContext }: Props) => {

  return (
    <SiteLayout
      locale={pageContext.locale}
      componentName={pageContext.componentName}
    >
      <Seo
        title="UNQTech Services"
       
      />
      <SiteContent>
         
      </SiteContent>
    </SiteLayout>
  )

}


export default ServicePage