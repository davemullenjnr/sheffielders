// core
import React, { Component } from 'react'
import styled from 'styled-components'

// theme
import { variables, typography } from '../../theme'
import { LayoutWrapper } from '../elements/Layout'

// styles
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
const Credit = styled.p`
  font-family: ${typography.fontSans};
  color: ${props => props.theme.light};
  font-size: ${typography.f7};

  @media ${variables.md} {
    font-size: ${typography.f6};
  }
`
const Year = styled.p`
  font-family: ${typography.fontSans};
  color: ${props => props.theme.light};
  font-size: ${typography.f7};

  @media ${variables.md} {
    font-size: ${typography.f6};
  }
`

// render
export default class Footer extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Flex>
          <Credit>
            hello@sheffielders.org
          </Credit>
          <Year>© {new Date().getFullYear()}</Year>
        </Flex>
      </LayoutWrapper>
    )
  }
}
