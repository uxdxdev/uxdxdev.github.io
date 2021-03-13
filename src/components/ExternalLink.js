import React from 'react'

const ExternalLink = ({ href, children }) => {
  return (
    <a rel="noreferrer noopener" href={href} target="_blank" style={{ margin: '0 2px 0 2px' }}>
      {children}
    </a>
  )
}

export default ExternalLink
