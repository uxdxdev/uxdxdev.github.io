module.exports = {
  siteMetadata: {
    title: `daithimorton.github.io 🐋`,
    author: `David Morton`,
    twitter: `daithimorton`,
    description: `Let's talk about that.`,
    siteUrl: `https://daithimorton.github.io`,
  },
  plugins: [`gatsby-plugin-twitter`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: '_blank',
              rel: 'noreferrer noopener',
            },
          },
          `gatsby-remark-reading-time`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-63312977-12`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.title,
                  description: edge.node.excerpt,
                  url: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                  keywords: edge.node.frontmatter.keywords.split(','),
                })
              })
            },
            query: `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
              edges {
                node {
                  excerpt
                  html
                  frontmatter {
                    title                    
                    keywords                  
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `,
            output: '/rss.xml',
            title: 'RSS Feed',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `daithimorton.github.io`,
        short_name: `daithimorton.github.io`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#03A9F4`,
        display: `minimal-ui`,
        icon: `content/assets/profile_cropped.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
