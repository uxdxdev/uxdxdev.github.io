import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
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
                minWidth: 80,
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
                borderBottom: 'none'
              }}
            >
              <strong>{author}</strong> is a husband, father, and software engineer living in Ireland with interests in user interface design, a/b testing, user experience, developer experience, game design, business, and teaching.
            </Link>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile_cropped.jpg/" }) {
      childImageSharp {
        fixed(width: 80, height: 80, quality: 100) {
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

export default Bio
