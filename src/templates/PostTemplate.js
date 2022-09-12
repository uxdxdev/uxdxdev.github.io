import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { keywords as commonKeywords } from '../utils/constants'
import ExternalLink from '../components/ExternalLink'
import { MDXRenderer } from "gatsby-plugin-mdx"

import {
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'
import Header from '../components/Header'

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteUrl = this.props.data.site.siteMetadata.siteUrl
    const { previous, next } = this.props.pageContext
    const { frontmatter } = post
    const { banner } = frontmatter

    // banner image for social media sharing
    const bannerSrc = banner && banner.childImageSharp.fluid.src
    const imageSrc = siteUrl + bannerSrc
    const keywords = commonKeywords.concat(frontmatter.keywords?.split(`,`))

    const shareUrl = `${siteUrl}/blog${post.fields.slug}`
    const postTitle = `I've published a new article! "${frontmatter.title}" read it here`

    const sharingIconSize = 48

    return (
      <>
        <Header />

        <div
          style={{
            margin: `${rhythm(1)} auto`,
            maxWidth: rhythm(30),
            padding: rhythm(1 / 2)
          }}
        >

          <SEO
            title={frontmatter.title}
            description={frontmatter.excerpt}
            keywords={keywords}
            image={imageSrc}
          />
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <h2>{frontmatter.title}</h2>
            <p
              style={{
                // ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
                marginTop: rhythm(-1 / 2),
              }}
            >
              {/* ☕ {post.fields.readingTime.text} */}
              ☕ {post.timeToRead} min read
            </p>
          </div>

          {banner && (
            <div>
              <Image
                fluid={banner.childImageSharp.fluid}
                alt={frontmatter.imageAltText}
              />
              <ExternalLink href={frontmatter.bannerLink}>
                {frontmatter.bannerCredit}
              </ExternalLink>
            </div>
          )}

          <br />
          <MDXRenderer>{post.body}</MDXRenderer>
          <h2>Share this post</h2>
          <div>
            <LinkedinShareButton url={shareUrl} title={postTitle}>
              <LinkedinIcon size={sharingIconSize} round />
            </LinkedinShareButton>
            <TwitterShareButton url={shareUrl} title={postTitle}>
              <TwitterIcon size={sharingIconSize} round />
            </TwitterShareButton>
            <EmailShareButton url={shareUrl} subject={postTitle}>
              <EmailIcon size={sharingIconSize} round />
            </EmailShareButton>
          </div>
        </div>
      </>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id      
      body
      frontmatter {
        title
        excerpt
        bannerCredit
        bannerLink
        imageAltText
        keywords
        banner {
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug        
      }
      timeToRead 
    }
  }
`
