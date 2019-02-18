// core
import React, { Component } from 'react'
import styled from 'styled-components'

// components
import Menu from '../Menu'
import Logo from '../Logo'
import { LayoutWrapper } from '../elements/Layout'

// style
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

// render
export default class Header extends Component {
  render() {
    const { logofill, menufill } = this.props;
    return (
      <LayoutWrapper>
        <Flex>
          <Logo logofill={logofill} />
          <Menu menufill={menufill} />
        </Flex>
      </LayoutWrapper>
    )
  }
}
