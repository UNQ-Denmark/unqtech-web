import { PageContext } from '../pageContext';
import React from 'react';
import Seo from '../components/shared/Seo';
import { SiteLayout } from '../components/layout/layout';

type Props = {
  pageContext: PageContext;
};

const Index: React.FC<Props> = ({ pageContext }: Props) => {


  return (
    <SiteLayout
      locale={pageContext.locale}
      componentName={pageContext.componentName}
    >
      <Seo
        title="Digitale eksperter"
        pathname="/"
      />

    </SiteLayout>
  );
};
export default Index;

