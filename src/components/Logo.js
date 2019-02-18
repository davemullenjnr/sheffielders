// core
import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'

// components
import SheffieldersLogo from './svg/SheffieldersLogo'
import { variables } from '../theme'

// keyframes
const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`

// style
const LogoBox = styled.div`
  width: 4rem;
  height: auto;

  @media ${variables.sm} {
    width: 5rem;
  }

  @media ${variables.md} {
    width: 6rem;
  }
`

const Rotate = styled.div`
  animation: ${rotate} 10s linear infinite both;
  display: grid;
`

// render
export default class Logo extends Component {
  render() {
    const { logofill } = this.props;
    return (
      <Link to="/">
        <LogoBox>
          <Rotate>
            <SheffieldersLogo logofill={logofill} />
          </Rotate>
        </LogoBox>
      </Link>
    )
  }
}
