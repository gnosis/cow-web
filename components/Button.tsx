import styled from 'styled-components'
import { transparentize } from 'polished'
import { Defaults, Color, Font } from '../const/styles/variables'

type ButtonProps = {
  wrapText?: boolean
  borderRadius?: number
  fontSize?: number
  paddingLR?: number
  variant?: string
  children?: React.ReactNode
}

const Wrapper = styled.button<ButtonProps>`
  display: flex;
  background: ${({ variant }) => variant === 'white' ? Color.black : transparentize(0.9, Color.orange)};
  flex-flow: row;
  border: 0.1rem solid ${({ variant }) => variant === 'white' ? transparentize(0.6, Color.grey) : Color.orange};
  color: ${({ variant }) => variant === 'white' ? Color.white : Color.orange};
  padding: ${({ paddingLR }) => paddingLR ? `0 ${paddingLR}rem` : '0 6rem'};
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : Defaults.borderRadius};
  min-height: 5.6rem;
  align-items: center;
  font-size: ${({ fontSize }) => fontSize ? fontSize : Font.sizeDefault};
  justify-content: center;
  transition: background 0.2s ease-in-out;
  white-space: ${({ wrapText }) => wrapText ? 'initial' : 'nowrap'};

  > a {
    text-decoration: none;
    color: inherit;
  }
`

// General purpose multiple button wrapper
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;
`

export default function Button({ wrapText, borderRadius, fontSize, paddingLR, variant, children }: ButtonProps) {
  return (
    <Wrapper {...{wrapText, borderRadius, fontSize, paddingLR, variant}}>
      {children}
    </Wrapper>
  )
}