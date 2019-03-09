import React, { Component } from 'react'
import { graphql } from 'gatsby'
import './../../theme/base.css'
import styled, { ThemeProvider } from 'styled-components'
import Img from 'gatsby-image'

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
  margin-bottom: ${variables.spacer / 2}rem;
  text-transform: uppercase;
  font-size: ${typography.f7};
  letter-spacing: ${variables.spacer / 4}rem;
  font-weight: bold;
  color: ${variables.white};

  @media ${variables.sm} {
    letter-spacing: ${variables.spacer / 2}rem;
  }
`

const Title = styled.h1`
  margin-bottom: ${variables.spacer * 4}rem;
  font-size: ${typography.f3};
  color: ${variables.white};

  @media ${variables.sm} {
    font-size: ${typography.f2};
  }

  @media ${variables.md} {
    font-size: ${typography.f1};
  }
`

const Decription = styled.section`
  margin-bottom: ${variables.spacer * 4}rem;
  font-size: ${typography.f7};
  color: ${variables.white};
  line-height: 2;

  @media ${variables.sm} {
    font-size: ${typography.f6};
    max-width: 60vw;
    margin-left: auto;
    margin-right: auto;
  }

  @media ${variables.md} {
    max-width: 50vw;
  }

  @media ${variables.lg} {
    max-width: 40vw;
  }

  p {
    margin-bottom: ${variables.spacer * 2}rem;
    line-height: 1.8;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    text-decoration: none;

    &:hover {
      color: ${variables.pink};
      border-bottom: 1px solid ${variables.pink};
    }
  }
`

const SiteLink = styled.a`
  font-size: ${typography.f7};
  color: ${variables.white};
  text-decoration: none;
  border-bottom: ${variables.spacer / 4}rem solid ${variables.pink};
  transition: 0.15s ease;
  padding: ${variables.spacer / 4}rem 0 ${variables.spacer}rem;
  line-height: 1;

  &:hover {
    color: ${variables.pink};
  }

  @media ${variables.sm} {
    font-size: ${typography.f6};
  }
`

const HeroImage = styled(Img)`
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
`

export default class Post extends Component {
  render() {
    const { markdownRemark } = this.props.data
    return (
      <Background black>
        <Scafolding>
          <Head />
          <SEO title={markdownRemark.frontmatter.title} keywords={[`${markdownRemark.frontmatter.title}`]} />
          <Header logofill={variables.white} menufill={variables.white} />
          <Main>
            <Profile>
              <HeroImage fluid={markdownRemark.frontmatter.hero.childImageSharp.fluid} fadeIn={false}/>
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
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        description
        sitelink
        slug
        hero {
          childImageSharp {
            fluid(maxWidth: 160) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`