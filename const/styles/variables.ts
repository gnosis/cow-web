import { transparentize } from 'polished'

export const Defaults = {
  borderRadius: '1.6rem'
}

export const Color = {
  white: '#F6F6F6',
  black: '#000000',
  orange: '#ED6834',
  grey: '#BFBFBF',
  border: transparentize(0.75, '#BFBFBF'),
  borderGradient: `linear-gradient(to bottom, ${transparentize(0.75, '#BFBFBF')}, ${transparentize(1, '#BFBFBF')})`
}

export const Font = {
  default: "'Inter', 'Helvetica Neue', Helvetica, sans-serif",
  arial: "Arial, Helvetica, sans-serif",
  sizeDefault: '1.6rem',
  weightLight: 300,
  weightNormal: 400,
  weightMedium: 600,
  weightBold: 700,
}
