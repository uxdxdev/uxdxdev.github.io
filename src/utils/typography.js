import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '20px',
  headerFontFamily: ['IBM Plex Sans'],
  bodyFontFamily: ['IBM Plex Sans'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['Regular'],
    },
  ],
  overrideStyles: ({ rhythm }) => ({
    blockquote: {
      fontStyle: 'italic',
      paddingLeft: rhythm(1),
      marginLeft: rhythm(0),
      borderLeft: `${rhythm(1 / 4)} solid black`,
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
