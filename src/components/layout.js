import React from 'react'
import { Helmet } from 'react-helmet'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Good Box</title>
      </Helmet>
      <main>
        <nav>
          <a className="brand-logo" href="#">
            Good Box
          </a>
          <a href="#sendABox">Send A Box</a>
          <a href="#partners">Partners</a>
        </nav>
        {children}
      </main>
    </>
  )
}
