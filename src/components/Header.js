import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import Bio from './Bio'

const Header = () => {
  return (
    <header
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(15),
        padding: rhythm(1 / 2),
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <StaticQuery
        query={bioQuery}
        render={(data) => {
          const { author } = data.site.siteMetadata

          return (
            <div
              style={{
                width: '100%',
              }}
            >
              <Bio />
            </div>
          )
        }}
      />
    </header>
  )
}

const bioQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile_cropped.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Header
