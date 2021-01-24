import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const IndexPage = () => {
  const { brilliantDetroit, altForGirls, noahProject } = useStaticQuery(
    graphql`
      query {
        brilliantDetroit: file(
          relativePath: { eq: "partners/brilliant-detroit.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        altForGirls: file(
          relativePath: { eq: "partners/alternatives-for-girls.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        noahProject: file(relativePath: { eq: "partners/noah-project.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <section id="sendABox" className="section">
        <h2 className="title is-2">Send a Box</h2>
        <p className="content">
          We say "box" but you can really choose whatever vessel works for you,
          be it bag or bin!
          <br /> Just please make sure you wrap each kit individually.
        </p>
        <div className="tile is-ancestor">
          <Link to="partners/brilliant-detroit" className="tile is-parent">
            <div className="tile is-child box">
              <h5 className="title is-5">
                School supplies for
                <br /> Brilliant Detroit
              </h5>
              <figure className="image">
                <Img
                  fluid={brilliantDetroit.childImageSharp.fluid}
                  alt="Brilliant Detroit"
                />
              </figure>
            </div>
          </Link>
          <Link to="partners/alternatives-for-girls" className="tile is-parent">
            <div className="tile is-child box">
              <h5 className="title is-5">
                Hygiene kits for
                <br /> Alternatives for Girls
              </h5>
              <figure className="image">
                <Img
                  fluid={altForGirls.childImageSharp.fluid}
                  alt="Alternatives for Girls"
                />
              </figure>
            </div>
          </Link>
          <Link to="partners/noah-project" className="tile is-parent">
            <div className="tile is-child box">
              <h5 className="title is-5">
                Warming kits for
                <br /> The Noah Project
              </h5>
              <figure className="image">
                <Img
                  fluid={noahProject.childImageSharp.fluid}
                  alt="The Noah Project"
                />
              </figure>
            </div>
          </Link>
        </div>
      </section>
      <section id="partners" className="section">
        <h2 className="title is-2">Partners</h2>
        <p className="content">
          Are you a local organization serving our community who could use
          supply support?
          <br /> Let us know!
        </p>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h5 className="title is-5">Brilliant Detroit</h5>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h5 className="title is-5">Alternatives for Girls</h5>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h5 className="title is-5">The Noah Project</h5>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
