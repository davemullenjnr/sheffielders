// core
import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'


// components
import Header from '../components/core/Header'
import Info from '../components/templates/Info'
import SEO from '../components/core/Seo'
import { Background } from '../components/elements/Layout'
import { variables, typography } from '../theme';
import TextSnippet from '../components/TextSnippet';
import Form from '../components/Form';

// styles
const Hero = styled.section`
  max-width: 40rem;
  margin: 0 auto;
  padding: ${variables.spacer * 4}rem ${variables.spacer * 4}rem ${variables.spacer * 8}rem;
`

const HeroText = styled.h1`
  font-weight: normal;
  text-align: center;
  font-size: ${typography.f5};
  line-height:1.5;

  @media ${variables.md} {
    font-size: ${typography.f4};
  }
  `

const Content = styled.div`
  padding: ${variables.spacer * 8}rem ${variables.spacer * 4}rem;

  @media ${variables.md} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Section = styled.section`
  max-width: ${props => props.thin ? "32" : props.wide ? "48" : "40"}rem;
  margin: 0 auto;
  padding: ${variables.spacer * 4}rem 0;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }

  @media ${variables.md} {
    padding: ${variables.spacer * 6}rem 0;
  }
`

const Heading = styled.h3`
  font-family: ${typography.fontSerif};
  font-size: ${typography.f4};
  line-height: 1.2;
  margin-bottom: ${variables.spacer * 3}rem;

  @media ${variables.md} {
    font-size: ${typography.f3};
  }
`
const Paragraph = styled.p`
  font-family: ${typography.fontSerif};
  font-size: ${typography.f6};
  line-height: 1.8;
  margin-bottom: ${variables.spacer * 3}rem;

  @media ${variables.md} {
    font-size: ${typography.f5};
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const FormContainer = styled.div`
  padding: ${variables.spacer * 2}rem;
  background-color: ${variables.pink};
  border-radius: ${variables.spacer}rem;
  margin-bottom: ${variables.spacer * 3}rem;
`


//render
const JoinPage = () => (
  <Info>
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
    <SEO title="A collective of businesses, creatives, and projects" keywords={[`sheffielders`, `Sheffield`]} />
    <Background pink>
      <Header />
      <Hero>
        <HeroText>
          <b>Sheffielders is a network</b> of local businesses, projects, and
          creatives who rely on organic search engine results to increase
          their visibility and drive traffic to their website.
        </HeroText>
      </Hero>
    </Background>
    <Content>
      <Section wide>
        <TextSnippet title="In short" description="Backlinks improve your Google PageRank, increase your visibility and drive traffic to your website. Let's work together to create a little local network of links and help each other grow." />
      </Section>
      <Section>
        <Heading>The importance of backlinks</Heading>
        <Paragraph>Links to your website help Google (and other search engines) determine your reputation and, the more trust-worthy you are, the higher you will rank in search results. Combine that with some relevant, keyword-rich copy and your visibility in the results pages
        will begin to dramatically improve.</Paragraph>
        <Paragraph>Google have complex algorithms to determine which webpages to show first, depending on what the user is searching for. Aside from some good on-site optimisation; having external links pointing to your website, that reconfirm the products or services that you offer, will help to gain Google's confidence in serving your website as a top result.</Paragraph>
      </Section>
      <Section>
        <Heading>How do search engines determine credibility?</Heading>
        <Paragraph><b>Backlinks!</b><br />
        The primary aim of search engines is to consistently deliver relevant webpage results from credible sources. Backlinks are a search engine's equivalent to word-of-mouth recommendations; building your reputation and earning trust.</Paragraph>
        <Paragraph>A backlink to your website is like a 'vote of confidence' to Google's PageRank algorithm, and is undoubtedly the strongest signal to the value of your content.</Paragraph>
      </Section>
      <Section>
        <Heading>Join Sheffielders</Heading>
        <Paragraph>To join Sheffielders, simply add a link to <b>sheffielders.org</b> from somewhere on your website and fill in the form below so that I can create your page and link back to you.</Paragraph>
        <FormContainer>
          <Form />
        </FormContainer>
        <Paragraph>By linking back to sheffielders.org, we'll both gain domain authority which will be mutually beneficial to us and everyone else within this network.</Paragraph>
      </Section>
    </Content>
  </Info>
)

export default JoinPage
