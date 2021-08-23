import React, { useState } from 'react';
import { SiteLayout, StyledContent } from '../components/layout/layout';

import { PageContext } from '../pageContext';
import Seo from '../components/shared/Seo';

type Props = {
  pageContext: PageContext;
}

const CasesPage: React.FC<Props> = ({ pageContext }: Props) => {
  const [loading, setLoading] = useState(false);

  return (
    <SiteLayout
      locale={pageContext.locale}
      componentName={pageContext.componentName}
    >
      <Seo 
        title="UNQ Kontakt" 
      />
      <StyledContent>
         
      </StyledContent>
    </SiteLayout>
  );
};
export default CasesPage;
