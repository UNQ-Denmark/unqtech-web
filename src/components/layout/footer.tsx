import styled from '@emotion/styled';
import { Col, Layout, Row } from 'antd';
import React from 'react';

const StyledFooter = styled(Layout.Footer)`
  background: #274c77;
  width: 100%;
  z-index: 6;
  margin-top: 6rem;
  color: #fff;
`;


interface Props {}

const FooterComponent: React.FC<Props> = ({}: Props) => {
  return (
    <StyledFooter>
      <Row justify="center">© 2021 by High View ApS all rights reserved.</Row>
    </StyledFooter>
  );
};

export default FooterComponent;

// export const footerQuery = () => {
//   const data = useStaticQuery(graphql`
//     query FooterQuery {
//       contentfulFooter {
//         email
//         facebookUrl
//         instagramUrl
//         linkedInUrl
//         phone
//       }
//     }
//   `);
//   return data.contentfulFooter;
// };
