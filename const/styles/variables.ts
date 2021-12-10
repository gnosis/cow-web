import { transparentize } from 'polished'

export const Defaults = {
  borderRadius: '1.6rem'
}

export const Color = {
  white: '#F6F6F6',
  black: '#000000',
  orange: '#ED6834',
  grey: '#979797',
  border: transparentize(0.75, '#979797'),
  borderGradient: `linear-gradient(to bottom, ${transparentize(0.75, '#979797')}, ${transparentize(1, '#979797')})`
}

export const Font = {
  default: "'Inter', 'Helvetica Neue', Helvetica, sans-serif",
  arial: "Arial, Helvetica, sans-serif",
  sizeDefault: '1.6rem',
  weightLight: 300,
  weightNormal: 400,
  weightMedium: 500,
  weightBold: 700,
}
