import React from "react";
import IntegrationComponent from "../components/integration.tsx/integration-component";
import { SiteLayout } from "../components/layout/layout";
import Seo from "../components/shared/Seo";
import { isBrowser } from "../components/shared/utils";
import { PageContext } from "../pageContext";


type Props = {
    pageContext: PageContext
    data: {
    };
  }
  

const IntegrationPage: React.FC<Props> = ({ pageContext, data }: Props) => {
  
    return (
      <SiteLayout
        locale={pageContext.locale}
        componentName={pageContext.componentName}
      >
          <Seo 
            title="Data integrationer til Power BI, E-conomics, Woocommerce og flere"
            description="Hos UNQTech tilbyder kan vi skræddersy data integrationer som passer til netop din foretning. Vi tilbyder en færdig integration mellem Visma E-conomics og Power BI"
            pathname={isBrowser() ? window.location.href : '/'}
            lang={pageContext.locale}
          />
          <IntegrationComponent locale={pageContext.locale} />
      </SiteLayout>
    );
  };

export default IntegrationPage