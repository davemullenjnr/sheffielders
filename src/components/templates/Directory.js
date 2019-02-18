import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Main, LayoutWrapper } from '../elements/Layout'
import { variables, typography } from '../../theme';

// query
const DIRECTORY_QUERY = graphql`
  query PostDirectory {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            category
          }
        }
      }
    }
  }
`

// style
const Listing = styled.article`
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

  @media ${variables.sm} {
    letter-spacing: ${variables.spacer / 2}rem;
  }
`

const Title = styled.h2`
  margin-bottom: ${variables.spacer}rem;
  font-size: ${typography.f3};

  @media ${variables.sm} {
    font-size: ${typography.f2};
  }

  @media ${variables.md} {
    font-size: ${typography.f1};
  }
`

const Decription = styled.p`
  margin-bottom: ${variables.spacer}rem;
  font-size: ${typography.f7};
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
`

const ListingLink = styled(Link)`
  font-size: ${typography.f7};
  text-decoration:none;
  border-bottom: ${variables.spacer / 4}rem solid ${variables.pink};
  box-shadow: inset 0 -${variables.spacer}rem 0 ${variables.pink};
  transition: 0.15s ease;
  padding: ${variables.spacer / 4}rem;
  line-height: 1;

  &:hover {
    background-color: ${variables.pink};
  }

  @media ${variables.sm} {
    font-size: ${typography.f6};
  }
`

// render
const Directory = () => (
  <Main>
    <LayoutWrapper>
      <StaticQuery
        query={DIRECTORY_QUERY}
        render={({ allMarkdownRemark }) =>
          allMarkdownRemark.edges.map(({ node }) => (
            <Listing key={node.frontmatter.slug}>
              <Category>{node.frontmatter.category}</Category>
              <Title>{node.frontmatter.title}</Title>
              <Decription>{node.frontmatter.description}</Decription>
              <ListingLink to={`/collective/${node.frontmatter.slug}`}>View Profile</ListingLink>
            </Listing>
          ))
        }
      />
    </LayoutWrapper>
  </Main>
)

export default Directory
