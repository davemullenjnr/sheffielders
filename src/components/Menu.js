// core
import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// components
import MenuIcon from './svg/MenuIcon'
import { variables } from '../theme'

// style
const MenuLink = styled(Link)`
  padding: ${variables.spacer}rem;
`

const MenuIconBox = styled.div`
  width: 1.5rem;
  height: auto;
  display: grid;

  @media ${variables.sm} {
    width: 2rem;
  }

  @media ${variables.md} {
    width: 2rem;
  }
`

// render
export default class Menu extends Component {
  render() {
    const { menufill } = this.props
    return (
      <MenuLink to="/menu">
        <MenuIconBox>
          <MenuIcon menufill={menufill} />
        </MenuIconBox>
      </MenuLink>
    )
  }
}
