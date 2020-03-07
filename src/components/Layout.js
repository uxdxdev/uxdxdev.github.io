import React from 'react'
import { Link } from 'gatsby'
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
          <a href="https://twitter.com/daithimorton" target="_blank">
            twitter
          </a>{' '}
          •{' '}
          <a href="https://github.com/daithimorton" target="_blank">
            github
          </a>{' '}
          •{' '}
          <a
            href="https://stackoverflow.com/users/2600522/david-morton"
            target="_blank"
          >
            stackoverflow
          </a>{' '}
          •{' '}
          <a href="/rss.xml" target="_blank">
            rss
          </a>
        </footer>
      </div>
    )
  }
}

export default Layout
