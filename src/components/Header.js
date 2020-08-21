import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'
import ExternalLink from './ExternalLink'

const Header = () => {
  return (
    <header
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
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
                display: 'flex',
                alignItems: 'center',
                marginRight: rhythm(1)
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
              {/* <h1 style={{ marginBottom: 0 }}> */}
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  borderBottom: 'none'
                }}
              >
                <span style={{ fontWeight: 500 }}>{author}</span>
              </Link>
              {/* </h1> */}
            </div>
          )
        }}
      />
      <div style={{
        marginLeft: `auto`,
      }}>
        <ExternalLink href="https://twitter.com/daithimorton">
          twitter
      </ExternalLink>{' '}
      •{' '}
        <ExternalLink href="https://github.com/daithimorton">
          github
      </ExternalLink>{' '}
      •{' '}
        <ExternalLink href="https://www.npmjs.com/~mortond">
          NPM
      </ExternalLink>{' '}
      •{' '}
        <ExternalLink href="https://stackoverflow.com/users/2600522/david-morton">
          stackoverflow
      </ExternalLink>{' '}
      • <ExternalLink href="/rss.xml">rss</ExternalLink>
      </div>
    </header>
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
