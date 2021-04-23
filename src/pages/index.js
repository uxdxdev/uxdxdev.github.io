import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { keywords as commonKeywords } from '../utils/constants'
import bannerSrc from '../../content/assets/blogBanner.jpg'
import Header from '../components/Header'

class LandingPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteUrl = data.site.siteMetadata.siteUrl
    const posts = data.allMdx.edges
    const imageSrc = siteUrl + bannerSrc

    return (
      <>
        <Header />

        <SEO
          title="David Morton"
          keywords={commonKeywords}
          image={imageSrc}
        />
        <div style={{
          display: 'grid',
          gridGap: '1rem',
          gridTemplateColumns: `repeat(auto-fit, minmax(${rhythm(12)}, 1fr))`,
          margin: '1rem auto 1rem auto',
          maxWidth: rhythm(40),
          justifyContent: 'center',
        }}>

          {posts.map(({ node }, index) => {
            const banner = node.frontmatter.banner
            const title = node.frontmatter.title || node.fields.slug
            return (

              <div key={node.fields.slug} style={{
                padding: rhythm(1),
                boxShadow: 'rgb(0 0 0 / 20%) 0px 0px 20px 0px',
                backgroundColor: 'white',
              }}>
                <Link
                  style={{
                    borderBottom: 'none',
                    fontWeight: 'inherit',
                    color: 'inherit'
                  }}
                  to={`/blog${node.fields.slug}`}
                >
                  <h2
                    style={{
                      lineHeight: '1.25em',
                      marginBottom: 0,
                      textAlign: 'center'
                    }}
                  >

                    {title}
                  </h2>
                  <p style={{
                    marginBottom: rhythm(1 / 3),
                    textAlign: 'center'
                  }}>
                    ☕ {node.timeToRead} min read
                  </p>
                  <Image
                    fluid={banner.childImageSharp.fluid}
                    alt={node.frontmatter.imageAltText}
                    style={
                      {
                        marginBottom: rhythm(1 / 4),
                      }
                    }
                  />
                  <p dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }} />
                </Link>

              </div>
            )
          })}
        </div>

      </>
    )
  }
}

export default LandingPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug           
          }
          timeToRead
          frontmatter {
            title
            excerpt
            banner {
              childImageSharp {
                fluid(maxWidth: 720, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
