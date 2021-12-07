import styled from 'styled-components'
import { borderRadius, transparentize } from 'polished'
import { Defaults, Color, Font } from '../const/styles/variables'

type ButtonProps = {
  wrapText?: boolean
  borderRadius?: number
  fontSize?: number
  children?: any
}

const Wrapper = styled.button<ButtonProps>`
  display: flex;
  background: ${transparentize(0.9, Color.orange)};
  flex-flow: row;
  border: 0.1rem solid ${Color.orange};
  padding: 0 1.6rem;
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : Defaults.borderRadius};
  min-height: 4.8rem;
  align-items: center;
  font-size: ${({ fontSize }) => fontSize ? fontSize : Font.sizeDefault};
  justify-content: center;
  transition: background 0.2s ease-in-out;
  white-space: ${({ wrapText }) => wrapText ? 'initial' : 'nowrap'};

  > a {
    text-decoration: none;
  }
`

export default function Button({ wrapText, borderRadius, fontSize, children }: ButtonProps) {
  return (
    <Wrapper wrapText={wrapText} borderRadius={borderRadius} fontSize={fontSize}>
      {children}
    </Wrapper>
  )
}