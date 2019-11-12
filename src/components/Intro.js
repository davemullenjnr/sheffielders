// core
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { typography, variables } from '../theme'
import { LayoutWrapper } from './elements/Layout'

// styles
const Container = styled.div`
  margin: 0 ${variables.spacer * 2}rem ${variables.spacer * 2}rem;

  @media ${variables.md} {
    margin-left: 8vw;
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`

const Box = styled.div`
  background-color: ${variables.white};
  padding: ${variables.spacer * 4}rem;
  border: ${variables.spacer / 4}rem solid ${variables.black};
  border-radius: ${variables.spacer / 4}rem;
  box-shadow: -4px -4px 0px 0px ${variables.black};
  position: relative;
  top: ${variables.spacer / 2}rem;
  left: ${variables.spacer / 2}rem;
  margin-right: ${variables.spacer / 2}rem;

  @media ${variables.sm} {
    max-width: 66vw;
  }

  @media ${variables.md} {
    max-width: 44vw;
  }

  @media ${variables.lg} {
    max-width: 40vw;
  }
`

const SubHeading = styled.p`
  font-family: ${typography.fontSans};
  font-size: ${typography.f6};
  margin-bottom: ${variables.spacer}rem;

  @media ${variables.md} {
    font-size: ${typography.f5};
  }
`

const MainHeading = styled.h1`
  font-family: ${typography.fontSerif};
  font-size: ${typography.f5};
  line-height: 1.5;

  @media ${variables.md} {
    font-size: ${typography.f4};
  }

  @media ${variables.lg} {
    font-size: ${typography.f3};
  }
`

const CollectiveLink = styled(Link)`
  text-decoration:none;
  border-bottom: ${variables.spacer / 4}rem solid ${variables.brand};
  box-shadow: inset 0 -${variables.spacer}rem 0 ${variables.brand};
  display: inline-block;
  transition: 0.15s ease;
  padding: ${variables.spacer / 4}rem;
  line-height: 1;

  &:hover {
    background-color: ${variables.brand};
  }
`

// render
const Intro = () => {
  return (
    <LayoutWrapper>
      <Container>
        <Flex>
          <SubHeading>Ay-up, what's this all about?</SubHeading>
          <Box>
            <MainHeading>
              A <CollectiveLink to="/collective/">collective</CollectiveLink> of
              businesses, projects and creatives who have one thing in common — we're all Sheffielders!
            </MainHeading>
          </Box>
        </Flex>
      </Container>
    </LayoutWrapper>
  )
}

export default Intro
