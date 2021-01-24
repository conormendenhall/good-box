import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/styles.scss'

export default function Layout({ children }) {
  const { site, logo } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        logo: file(relativePath: { eq: "main.png" }) {
          childImageSharp {
            fixed(width: 256, height: 256) {
              ...GatsbyImageSharpFixed
            }
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
      <Link to="/">
        <div id="logo">
          <Img fixed={logo.childImageSharp.fixed} alt="The Good Box Logo" />
        </div>
      </Link>
      <main className="container">{children}</main>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Contact us:{' '}
            <strong>
              <a href="mailto:info@goodboxdetroit.org">
                info@goodboxdetroit.org
              </a>
            </strong>
          </p>
          <p>
            Branding by:{' '}
            <strong>
              <a href="https://www.lindsayfarris.com/">Lindsay Farris</a>
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
