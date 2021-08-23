import {SiteLayout, StyledContent} from '../components/layout/layout';

import { PageContext } from '../pageContext';
import React from 'react';
import Seo from '../components/shared/Seo';

interface Props {
  pageContext: PageContext
}

const AboutPage: React.FC<Props> = ({ pageContext }: Props) => {

  return (
    <SiteLayout
      locale={pageContext.locale}
      componentName={pageContext.componentName}
    >
      <Seo title="Om"/>
      <StyledContent>
      </StyledContent>
    </SiteLayout>
  );
};

export default AboutPage

