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
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
              <a href="#sendABox" className="navbar-item">
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
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            Contact us:{' '}
            <strong>
              <a href="mailto:info@goodboxdetroit.org">
                info@goodboxdetroit.org
              </a>
            </strong>
          </p>
          <p>
            Site by:{' '}
            <strong>
              <a href="https://github.com/conormendenhall">Conor Mendenhall</a>
            </strong>
          </p>
        </div>
      </footer>
    </>
  )
}
