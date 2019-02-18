// core
import React, { Component } from 'react'
import styled from 'styled-components'

// theme
import { variables } from '../../theme'
import { LayoutWrapper } from '../elements/Layout'

// styles
const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media ${variables.sm} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`
const Credit = styled.p`
  color: ${props => props.theme.light};
`
const Year = styled.p`
  color: ${props => props.theme.light};
`

// render
export default class Footer extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Flex>
          <Credit>
            Curated by <a href="https://davemullenjnr.co.uk">Dave Mullen Jnr</a>
            <br />
            hello@sheffielders.org
          </Credit>
          <Year>© {new Date().getFullYear()}</Year>
        </Flex>
      </LayoutWrapper>
    )
  }
}
