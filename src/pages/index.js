import * as React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/styles.scss'

const IndexPage = () => {
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
    <Layout>
      <main>
        <section className="hero is-primary is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">{site.siteMetadata.title}</h1>
              <h2 className="subtitle">Tagline</h2>
            </div>
          </div>
        </section>
        <section id="sendABox" className="section">
          <div className="container">
            <h2 className="title is-2">Send a Box</h2>
            <p className="content">
              We say "box" but you can really choose whatever vessel works for
              you, be it bag or bin!
              <br /> Just please make sure you wrap each kit individually.
            </p>
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <h5 className="title is-5">
                  School supplies for
                  <br /> Brilliant Detroit
                </h5>
              </div>
              <div class="tile is-parent">
                <h5 className="title is-5">
                  Hygiene kits for
                  <br /> Alternatives for Girls
                </h5>
              </div>
              <div class="tile is-parent">
                <h5 className="title is-5">
                  Warming kits for
                  <br /> The Noah Project
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section id="partners" className="section">
          <div className="container">
            <h2 className="title is-2">Partners</h2>
            <p className="content">
              Are you a local organization serving our community who could use
              supply support?
              <br /> Let us know!
            </p>
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <h5 className="title is-5">Brilliant Detroit</h5>
              </div>
              <div class="tile is-parent">
                <h5 className="title is-5">Alternatives for Girls</h5>
              </div>
              <div class="tile is-parent">
                <h5 className="title is-5">The Noah Project</h5>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
