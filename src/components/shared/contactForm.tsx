import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { MutableRefObject } from 'react';
import { useState } from 'react';
import { BtnBlack, BtnWhiteOut } from './button';
import { IContactForm } from './contentful.interface';
import { UNQSpinner } from './spinner';
import { theme } from './theme';
import { H2Bold, H3, H3Bold } from './typography';

const HeadContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 20;
  height: 420px;

  background: hsla(174, 62%, 47%, 1);
  @media(max-width: 760px) {
      height: 550px;
    }
`;


const WavesBot = styled.svg`
  position: absolute;
  bottom: 0;
  height: 130px;
  width: 100%;
  z-index: 10;
`

const Container = styled.div`
    z-index: 5;
    position: absolute;
    top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 3rem;
`;

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  input {
    height: 48px;
    border-radius: 5px;
    font-weight: 300;
    padding: 8px 14px;
    outline: none;
    margin: 1rem;
    width: calc(50% - 2rem);
    border: 2px solid ${theme.colors.greyLight.grey5};

    @media(max-width: 760px) {
      width: 100%;
    }
  }
`;

type Props = {
    locale: string
    contactRef: MutableRefObject<any>
  }

const ContactForm: React.FC<Props> = ({locale, contactRef}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const contactFormNodes = contactFormQuery();
  const contactForm: IContactForm =
    contactFormNodes.nodes.find((node: IContactForm) => node.node_locale == locale) ||
    contactFormNodes.nodes[0];

  function encode(data: any) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&');
  }

  const handleSubmit = (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        name: name,
        email: email
      }),
    })
      .then(() => {
        setTimeout(() => {
          setSuccess(true);
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        setTimeout(() => {
          setIsError(true);
          setIsLoading(false);
        }, 1000);
      });
  };
  return (
    <HeadContainer ref={contactRef}>
    <WavesBot xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path fill={theme.colors.bgLight.grey} fillOpacity="1" d="M0,256L80,261.3C160,267,320,277,480,282.7C640,288,800,288,960,272C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </WavesBot>
    <Container>
      {isLoading ? (
          <UNQSpinner />
          ) : (
              <StyledForm
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              >
        <H2Bold style={{color: 'white', marginLeft: '1rem'}}>{contactForm.title}</H2Bold>
          {success && <H3 style={{color: 'black', marginLeft: '1rem'}}>{contactForm.successMsg}</H3>}
          {isError && (
            <H3Bold style={{color: 'white', marginLeft: '1rem'}}>
              {contactForm.errorMsg}
            </H3Bold>
          )}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Do not fill this field:{' '}
              <input
                name="bot-field"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <input
            type="text"
            name="name"
            placeholder={contactForm.namePh}
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={success}
          />

          <input
            type="email"
            placeholder={contactForm.emailPh}
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={success}
          />

          <BtnWhiteOut disabled={success} style={{ margin: '1rem' }} type="submit">
          {contactForm.contactBtn}
          </BtnWhiteOut>
        </StyledForm>
      )}
    </Container>
      </HeadContainer>
  );
};

export default ContactForm;


export const contactFormQuery = () => {
    const data = useStaticQuery(graphql`
      query contactFormQuery {
        allContentfulContactForm {
          nodes {
            title
            successMsg
            errorMsg
            namePh
            emailPh
            msgPh
            contactBtn
            image {
                gatsbyImageData(width: 1920, placeholder: BLURRED)
            }
            node_locale
          }
        }
      }
    `);
    return data.allContentfulContactForm;
  };
  