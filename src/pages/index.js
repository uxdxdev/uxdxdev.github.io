import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import bannerSrc from '../../content/assets/blogBanner.jpg'
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteUrl = data.site.siteMetadata.siteUrl
    const posts = data.allMarkdownRemark.edges
    const imageSrc = siteUrl + bannerSrc

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[
            `blog`,
            `software`,
            `javascript`,
            `ux`,
            `dx`,
            `design`,
            `user experience`,
            `developer experience`,
            `product development`,
            `tutorials`,
            `learning`,
            `teaching`,
          ]}
          image={imageSrc}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h2
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  to={`/blog${node.fields.slug}`}
                >
                  {title}
                </Link>
              </h2>
              <small>☕ {node.fields.readingTime.text}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

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
          }
        }
      }
    }
  }
`
