import React from 'react'
import ExternalLink from './ExternalLink'
import Header from './Header'
import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header />
        {children}
        <footer>
          <ExternalLink href="https://twitter.com/daithimorton">
            twitter
          </ExternalLink>{' '}
          •{' '}
          <ExternalLink href="https://github.com/daithimorton">
            github
          </ExternalLink>{' '}
          •{' '}
          <ExternalLink href="https://stackoverflow.com/users/2600522/david-morton">
            stackoverflow
          </ExternalLink>{' '}
          • <ExternalLink href="/rss.xml">rss</ExternalLink>
        </footer>
      </div>
    )
  }
}

export default Layout
