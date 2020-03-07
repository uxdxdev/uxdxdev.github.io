import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'

const Header = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata

        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: rhythm(1),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />

            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <strong>{author}</strong>
            </Link>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile_cropped.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
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
