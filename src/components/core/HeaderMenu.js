// core
import React, { Component } from 'react'
import styled from 'styled-components'

// components
import Logo from '../Logo'
import { LayoutWrapper } from '../elements/Layout'
import { variables } from '../../theme';

// style 
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

// render
export default class HeaderMenu extends Component {
  render() {
    const { logofill } = this.props;
    return (
      <LayoutWrapper>
        <Flex>
          <Logo logofill={logofill} />
        </Flex>
      </LayoutWrapper>
    )
  }
}
