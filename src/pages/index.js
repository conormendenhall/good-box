import * as React from 'react'
import Layout from '../components/layout'
import { Parallax, Section } from 'react-materialize'

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Parallax
          image={
            <img alt="" src="http://materializecss.com/images/parallax1.jpg" />
          }
          options={{
            responsiveThreshold: 0,
          }}
        />
        <Section id="sendABox" className="white">
          <div className="row container">
            <h2 className="header">Send a Box</h2>
            <p className="grey-text text-darken-3 lighten-3">
              We say "box" but you can really choose whatever vessel works for
              you, be it bag or bin!
              <br /> Just please make sure you wrap each kit individually.
            </p>
          </div>
          <div className="row container">
            <div className="col s12 m4">
              <h5 className="center">
                School supplies for
                <br /> Brilliant Detroit
              </h5>
            </div>
            <div className="col s12 m4">
              <h5 className="center">
                Hygiene kits for
                <br /> Alternatives for Girls
              </h5>
            </div>
            <div className="col s12 m4">
              <h5 className="center">
                Warming kits for
                <br /> The Noah Project
              </h5>
            </div>
          </div>
        </Section>
        <Parallax
          image={
            <img alt="" src="http://materializecss.com/images/parallax2.jpg" />
          }
          options={{
            responsiveThreshold: 0,
          }}
        />
        <Section id="partners" className="white">
          <div className="row container">
            <h2 className="header">Partners</h2>
            <p className="grey-text text-darken-3 lighten-3">
              Are you a local organization serving our community who could use
              supply support?
              <br /> Let us know!
            </p>
          </div>
          <div className="row container">
            <div className="col s12 m4">
              <h5 className="center">Brilliant Detroit</h5>
            </div>
            <div className="col s12 m4">
              <h5 className="center">Alternatives for Girls</h5>
            </div>
            <div className="col s12 m4">
              <h5 className="center">The Noah Project</h5>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  )
}

export default IndexPage
