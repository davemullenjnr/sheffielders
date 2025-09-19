import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { variables, typography } from '../theme'
import { LayoutWrapper } from './elements/Layout'

const Container = styled.div`
  margin: ${variables.spacer * 2}rem;
  display: flex;
  flex-direction: column;

  @media ${variables.md} {
    margin-left: 3vw;
    margin-right: 3vw;
    flex-direction: row;
    justify-content: space-between;
    max-width: 48rem;
  }

  @media ${variables.lg} {
    margin-left: 8vw;
    margin-right: 8vw;
  }
`

const CategoryBlock = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: ${variables.spacer * 4}rem;
`
const CategoryTitle = styled.p`
  font-family: ${typography.fontSans};
  font-size: ${typography.f6};
  color: ${variables.brand};
  text-transform: uppercase;
`
const NavLink = styled(Link)`
  color: ${variables.white};
  font-family: ${typography.fontSerif};
  font-size: ${typography.f4};
  font-weight: bold;
  text-decoration: none;
  margin-bottom: ${variables.spacer / 2}rem;

  &:hover {
    color: ${variables.brand};
    text-decoration: underline;
  }

  @media ${variables.md} {
    margin-bottom: ${variables.spacer}rem;
  }
`

const NavLinks = () => {
  return (
    <LayoutWrapper>
      <Container>
        <CategoryBlock>
          <CategoryTitle>Creatives</CategoryTitle>
          <NavLink to="/collective/dave-mullen-jnr/">dave mullen jnr</NavLink>
          <NavLink to="/collective/cathy-sutherland/">cathy sutherland</NavLink>
          <NavLink to="/collective/dan-cook/">dan cook</NavLink>
          <NavLink to="/collective/liam-rimmington/">liam rimmington</NavLink>
          <NavLink to="/collective/ben-partridge/">ben partridge</NavLink>
          <NavLink to="/collective/melissa-montague/">melissa montague</NavLink>
          <NavLink to="/collective/ryan-sheppeck/">ryan sheppeck</NavLink>
          <NavLink to="/collective/katie-edge-mellor/">
            katie edge mellor
          </NavLink>
        </CategoryBlock>
        <CategoryBlock>
          <CategoryTitle>Businesses</CategoryTitle>
          <NavLink to="/collective/hoodie-hut/">hoodiehut</NavLink>
          <NavLink to="/collective/knots-massage/">knots massage</NavLink>
          <NavLink to="/collective/torso-clothing/">torso clothing</NavLink>
          <NavLink to="/collective/inner-city-weddings/">
            inner city weddings
          </NavLink>
        </CategoryBlock>
        <CategoryBlock>
          <CategoryTitle>Projects</CategoryTitle>
          <NavLink to="/collective/geometry-club/">geometry club</NavLink>
          <NavLink to="/collective/chess-prints/">chess prints</NavLink>
        </CategoryBlock>
      </Container>
    </LayoutWrapper>
  )
}

export default NavLinks
