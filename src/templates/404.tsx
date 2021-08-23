import React from 'react';
import Seo from '../components/shared/Seo';
import { SiteLayout } from '../components/layout/layout';

function NotFoundPage() {


  return (
    <SiteLayout
      locale={"dk"}
      componentName={""}
    >      
    <Seo title="404: Not found" pathname="404" />
      <h1>{`NOT FOUND`}</h1>
      <p>{`You just hit a route that doesn't exist... the sadness.`}</p>
    </SiteLayout>
  );
}

export default NotFoundPage;
