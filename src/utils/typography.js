import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '20px',
  headerFontFamily: ['Inter'],
  bodyFontFamily: ['Inter'],
  googleFonts: [
    {
      name: 'Inter',
      styles: ['400', '500', '700'],
    },
  ],
  overrideStyles: ({ rhythm, adjustFontSizeTo }) => ({
    h1: {
      ...adjustFontSizeTo('36px'),
    },
    h2: {
      ...adjustFontSizeTo('28px'),
    },
    h3: {
      ...adjustFontSizeTo('22px'),
    },
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
