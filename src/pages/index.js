import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { keywords as commonKeywords } from '../utils/constants'
import bannerSrc from '../../content/assets/blogBanner.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'

class LandingPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteUrl = data.site.siteMetadata.siteUrl
    const posts = data.allMarkdownRemark.edges
    const imageSrc = siteUrl + bannerSrc

    return (
      <>
        <Header />

        <SEO
          title="All posts"
          keywords={commonKeywords}
          image={imageSrc}
        />
        <div style={{
          display: 'flex',
          flexWrap: "wrap",
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(40),
          justifyContent: 'center',
        }}>

          {posts.map(({ node }) => {
            const banner = node.frontmatter.banner
            const title = node.frontmatter.title || node.fields.slug
            return (

              <div key={node.fields.slug} style={{
                padding: rhythm(1),
                margin: rhythm(1 / 2),
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px',
                backgroundColor: 'white',
                width: rhythm(12),
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
                    }}
                  >

                    {title}
                  </h2>
                  <p style={{
                    marginBottom: rhythm(1 / 3)
                  }}>☕ {node.fields.readingTime.text}</p>
                  <Image
                    fluid={banner.childImageSharp.fluid}
                    alt={node.frontmatter.imageAltText}
                    style={
                      {
                        marginBottom: rhythm(1 / 4),
                      }
                    }
                  />
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </Link>

              </div>
            )
          })}
        </div>

        {/* <Footer /> */}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            title
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
