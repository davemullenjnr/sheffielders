import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { variables, typography } from '../theme'
import { LayoutWrapper } from './elements/Layout'

const Container = styled.div`
  margin: 0 ${variables.spacer * 2}rem ${variables.spacer * 2}rem;

  @media ${variables.md} {
    margin-left: 8vw;
  }
`

const CategoryBlock = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: ${variables.spacer * 4}rem;
`
const CategoryTitle = styled.p`
  font-size: ${typography.f6};
  color: ${variables.pink};
  text-transform: uppercase;
`
const NavLink = styled(Link)`
  color: ${variables.white};
  font-family: ${typography.fontSerif};
  font-size: ${typography.f4};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: ${variables.pink};
    text-decoration: underline;
  }
`

const NavLinks = () => {
  return (
    <LayoutWrapper>
      <Container>
        <CategoryBlock>
          <CategoryTitle>Projects</CategoryTitle>
          <NavLink to="/collective/geometry-club">geometry club</NavLink>
        </CategoryBlock>
        <CategoryBlock>
          <CategoryTitle>Creatives</CategoryTitle>
          <NavLink to="/collective/dan-cook">dan cook</NavLink>
          <NavLink to="/collective/dave-mullen-jnr">dave mullen jnr</NavLink>
        </CategoryBlock>
        <CategoryBlock>
          <CategoryTitle>Businesses</CategoryTitle>
          <NavLink to="/collective/tshirtexpert">tshirtexpert</NavLink>
          <NavLink to="/collective/hoodiehut">hoodiehut</NavLink>
          <NavLink to="/collective/torso-clothing">torso clothing</NavLink>
        </CategoryBlock>
      </Container>
    </LayoutWrapper>
  )
}

export default NavLinks
