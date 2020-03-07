import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const { banner } = this.props.data

    // banner image for social media sharing
    const bannerSrc = banner && banner.childImageSharp.fluid.src
    let origin = ''
    if (typeof window !== 'undefined') {
      origin = window.location.origin
    }
    const imageSrc = origin + bannerSrc

    const keywords = post.frontmatter.keywords.split(`,`)
    console.log(keywords)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          keywords={keywords}
          image={imageSrc}
        />
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date} ☕ {post.fields.readingTime.text}
          </p>
        </div>

        {banner && (
          <div>
            <Image
              fluid={banner.childImageSharp.fluid}
              alt={post.frontmatter.imageAltText}
            />
            {post.frontmatter.bannerCredit}
          </div>
        )}

        <br />

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
            marginTop: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    banner: file(absolutePath: { regex: "/banner.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 720, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 250)
      html
      frontmatter {
        title
        category
        date(formatString: "DD MMMM YYYY")
        bannerCredit
        imageAltText
        keywords
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
