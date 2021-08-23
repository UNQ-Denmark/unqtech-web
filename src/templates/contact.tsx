import React, { useState } from 'react';
import { SiteContent, SiteLayout } from '../components/layout/layout';

import { PageContext } from '../pageContext';
import Seo from '../components/shared/Seo';

type Props = {
  pageContext: PageContext;
}

const ContactPage: React.FC<Props> = ({ pageContext }: Props) => {
  const [loading, setLoading] = useState(false);


  return (
    <SiteLayout
      locale={pageContext.locale}
      componentName={pageContext.componentName}
    >
      <Seo
        title="UNQ Kontakt"
       
      />
      <SiteContent>
         
      </SiteContent>
    </SiteLayout>
  );
};
export default ContactPage;
