import React from 'react'
import { rhythm } from '../utils/typography'
import ExternalLink from './ExternalLink'

const Footer = () => {
  return (
    <footer style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(30),
      padding: rhythm(1 / 2),
      textAlign: 'center'
    }}>
      <ExternalLink href="https://twitter.com/daithimorton">
        twitter
      </ExternalLink>{' '}
      •{' '}
      <ExternalLink href="https://github.com/daithimorton">
        github
      </ExternalLink>{' '}
      •{' '}
      <ExternalLink href="https://www.npmjs.com/settings/mortond/packages">
        NPM
      </ExternalLink>{' '}
      •{' '}
      <ExternalLink href="https://stackoverflow.com/users/2600522/david-morton">
        stackoverflow
      </ExternalLink>{' '}
      • <ExternalLink href="/rss.xml">rss</ExternalLink>
    </footer>
  )
}

export default Footer
