// core
import React, { Component } from 'react'
import styled from 'styled-components'
import { typography, variables } from '../theme';

const Title = styled.h4`
  font-family: ${typography.fontSans};
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: ${variables.spacer / 2}rem;
  margin-bottom: ${variables.spacer}rem;
`

const Box = styled.div`
  border: 1px solid ${variables.black};
  border-radius: ${variables.spacer}rem;
  padding: ${variables.spacer * 3}rem;
`

const Description = styled.p`
  font-family: ${typography.fontSerif};
  font-weight: bold;
  line-height: 2;
  font-size: 14px;
  text-align: center;
`

class TextSnippet extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <>
        <Title>{title}</Title>
        <Box>
          <Description>{description}</Description>
        </Box>
      </>
    );
  }
}

export default TextSnippet