import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(40),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <footer>
          <Link to="/">home</Link> •{' '}
          <a href="https://twitter.com/Beautifwhale" target="_blank">
            twitter
          </a>{' '}
          •{' '}
          <a href="https://github.com/beautifwhale" target="_blank">
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
