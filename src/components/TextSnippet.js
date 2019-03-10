// core
import React, { Component } from 'react'
import styled from 'styled-components'
import { typography, variables } from '../theme';

const Title = styled.h4`
  font-size: ${typography.f5};
  color: ${variables.black};
  font-weight: bold;
  margin-bottom: ${variables.spacer * 2}rem;
`

const Box = styled.div`
  border-left: 4px solid ${variables.brand};
  border-radius: ${variables.spacer / 2}rem;
  padding: ${variables.spacer * 3}rem;
  background-color: white;
  box-shadow: 0px 4px 16px 4px rgba(0,0,0,0.1);
`

const Description = styled.p`
  font-family: ${typography.fontSerif};
  line-height: 1.8;
  font-size: ${typography.f6};
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