import React from 'react'

const ExternalLink = ({ href, children }) => {
  return (
    <a rel="noreferrer noopener" href={href} target="_blank">
      {children}
    </a>
  )
}

export default ExternalLink
