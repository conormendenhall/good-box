import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function Layout({ children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{site.siteMetadata.title}</title>
      </Helmet>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="#" className="navbar-item">
              {site.siteMetadata.title}
            </a>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
              <a href="#sendABox" className="navbar-item is-active">
                Send a Box
              </a>
              <a href="#partners" className="navbar-item">
                Partners
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  )
}
