import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import ExternalLink from './ExternalLink'

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
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: 'auto',
              }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  borderBottom: 'none',
                }}
              >
                <h1
                  style={{
                    marginBottom: '5px',
                  }}
                >
                  {author}
                </h1>
                Web development, UI design, A/B testing, user experience,
                developer experience, open source, business, and teaching.
              </Link>
              <div>
                <ExternalLink href="https://twitter.com/uxdxdev">
                  Twitter
                </ExternalLink>{' '}
                <ExternalLink href="https://github.com/uxdxdev">
                  GitHub
                </ExternalLink>{' '}
                <ExternalLink href="https://www.linkedin.com/in/uxdx/">
                  LinkedIn
                </ExternalLink>{' '}
              </div>
            </div>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                borderBottom: 'none',
              }}
            >
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  minWidth: 120,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  marginBottom: 0,
                  borderRadius: `50%`,
                }}
              />
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
        fixed(width: 120, height: 120, quality: 100) {
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
