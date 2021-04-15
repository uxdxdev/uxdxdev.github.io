import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.75,
  headerFontFamily: ['Inter'],
  bodyFontFamily: ['Inter'],
  googleFonts: [
    {
      name: 'Inter',
      styles: ['400', '500', '700'],
    },
  ],
  overrideStyles: ({ rhythm }) => ({
    blockquote: {
      fontStyle: 'italic',
      paddingLeft: rhythm(1 / 2),
      marginLeft: rhythm(0),
      borderLeft: `${rhythm(1 / 4)} solid hsla(0,0%,0%,0.8)`,
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
