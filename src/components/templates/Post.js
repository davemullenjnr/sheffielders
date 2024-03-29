import React, { Component } from 'react'
import { graphql } from 'gatsby'
import './../../theme/base.css'
import styled, { ThemeProvider } from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image";

import SEO from '../core/Seo'
import Head from '../core/Head'
import Header from '../core/Header'
import Footer from '../core/Footer'
import { Scafolding, Main, Background } from '../elements/Layout'
import { variables, typography } from '../../theme'

// theme
const theme = {
  light: `${variables.white}`,
}

// style
const Profile = styled.article`
  text-align: center;
  max-width: 75vw;
  margin: ${variables.spacer * 12}rem auto;

  &:first-child {
    margin-top: ${variables.spacer * 4}rem;
  }

  &:last-child {
    margin-bottom: ${variables.spacer * 6}rem;
  }

  @media ${variables.md} {
    margin: ${variables.spacer * 16}rem auto;

    &:first-child {
      margin-top: ${variables.spacer * 6}rem;
    }

    &:last-child {
      margin-bottom: ${variables.spacer * 8}rem;
    }
  }
`

const Category = styled.p`
  font-family: ${typography.fontSans};
  margin-bottom: ${variables.spacer / 2}rem;
  text-transform: uppercase;
  font-size: ${typography.f7};
  letter-spacing: ${variables.spacer / 4}rem;
  font-weight: bold;
  color: ${variables.white};

  @media ${variables.sm} {
    font-size: ${typography.f6};
    letter-spacing: ${variables.spacer / 2}rem;
  }
`

const Title = styled.h1`
  margin-bottom: ${variables.spacer * 4}rem;
  font-size: ${typography.f3};
  color: ${variables.white};
  margin-left: auto;
  margin-right: auto;

  @media ${variables.sm} {
    font-size: ${typography.f2};
    max-width: 60vw;
  }

  @media ${variables.md} {
    margin-bottom: ${variables.spacer * 5}rem;
    font-size: ${typography.f1};
    max-width: 50vw;
  }
`

const Decription = styled.section`
  margin-bottom: ${variables.spacer * 4}rem;
  font-size: ${typography.f6};
  color: ${variables.white};
  line-height: 1.8;

  @media ${variables.sm} {
    font-size: ${typography.f5};
    max-width: 60vw;
    margin-left: auto;
    margin-right: auto;
  }

  @media ${variables.md} {
    margin-bottom: ${variables.spacer * 5}rem;
    font-size: ${typography.f4};
    max-width: 50vw;
  }

  p {
    margin-bottom: ${variables.spacer * 3}rem;
    line-height: 1.8;

    &:last-child {
      margin-bottom: 0;
    }

    @media ${variables.md} {
      margin-bottom: ${variables.spacer * 4}rem;
    }
  }

  a {
    text-decoration-color: ${variables.secondary};
    text-decoration-thickness: 2px;

    &:hover {
      color: ${variables.brand};
    }
  }
`

const SiteLink = styled.a`
  font-family: ${typography.fontSans};
  font-size: ${typography.f7};
  color: ${variables.white};
  text-decoration: none;
  border-bottom: ${variables.spacer / 4}rem solid ${variables.brand};
  transition: 0.15s ease;
  padding: ${variables.spacer / 4}rem 0 ${variables.spacer}rem;
  line-height: 1;

  &:hover {
    color: ${variables.brand};
  }

  @media ${variables.sm} {
    font-size: ${typography.f6};
  }

  @media ${variables.md} {
    font-size: ${typography.f5};
  }
`

const HeroImage = styled(GatsbyImage)`
  background-color: ${variables.white};
  margin: 0 auto;
  margin-bottom: ${variables.spacer * 4}rem;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: ${variables.spacer / 4}rem solid ${variables.white};

  @media ${variables.sm} {
    width: 120px;
    height: 120px;
  }

  @media ${variables.md} {
    width: 160px;
    height: 160px;
    border: ${variables.spacer / 2}rem solid ${variables.white};
  }

  img {
    border-radius: 50%;
  }
`

export default class Post extends Component {
  render() {
    const { markdownRemark } = this.props.data

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'author': 'Sheffielders',
      'headline': markdownRemark.frontmatter.title,
      'articleBody': markdownRemark.rawMarkdownBody,
      'publisher': 'Sheffielders',
    };

    return (
      <Background black>
        <Scafolding>
          <Head />
          <SEO schemaMarkup={schema} title={markdownRemark.frontmatter.title} description={markdownRemark.frontmatter.description} keywords={[`${markdownRemark.frontmatter.title}`]} type="article" />
          <Header logofill={variables.white} menufill={variables.white} />
          <Main>
            <Profile>
              <HeroImage image={markdownRemark.frontmatter.hero.childImageSharp.gatsbyImageData} alt={markdownRemark.frontmatter.title} />
              <Category>{markdownRemark.frontmatter.category}</Category>
              <Title>{markdownRemark.frontmatter.title}</Title>
              <Decription dangerouslySetInnerHTML={{ __html: markdownRemark.html}} />
              <SiteLink href={markdownRemark.frontmatter.sitelink}>
                {markdownRemark.frontmatter.sitelink}
              </SiteLink>
            </Profile>
          </Main>
          <ThemeProvider theme={theme}>
            <Footer />
          </ThemeProvider>
        </Scafolding>
      </Background>
    );
  }
}

export const query = graphql`query PostQuery($slug: String!) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    rawMarkdownBody
    frontmatter {
      title
      category
      description
      sitelink
      slug
      hero {
        childImageSharp {
          gatsbyImageData(width: 160, placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
        }
      }
    }
  }
}
`