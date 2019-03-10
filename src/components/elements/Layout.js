//core
import styled from 'styled-components'
import { variables } from '../../theme'
import unite from '../../assets/brand/unite-and-take-over.svg'
import blackTexture from '../../assets/brand/black-texture-2.png'
import whiteTexture from '../../assets/brand/white-texture-2.png'

// components
export const LayoutWrapper = styled.div`
  padding: ${variables.spacer * 2}rem;

  @media ${variables.sm} {
    padding: ${variables.spacer * 4}rem;
  }
`

// layout elements
export const Scafolding = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative; /* only in relation to the BackgroundUnite layer */
`
export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.center ? 'center' : 'start'};
`

// backgrounds
export const Background = styled.div`
  background-color: ${props => props.brand ? `${variables.brand}` : props.black ? `${variables.black}` : `${variables.white}`};
  background-image: url(${props => props.black ? `${whiteTexture}` : `${blackTexture}`});
  background-size: 300px 300px;
`

export const BackgroundUnite = styled.div`
  background-image: url(${unite});
  background-repeat: no-repeat;
  background-position: right;
  background-origin: content-box;
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0.05;
  padding: 4vw;

  @media ${variables.md} {
    padding: 2vw;
  }
`
