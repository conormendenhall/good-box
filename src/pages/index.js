import * as React from 'react'
import Layout from '../components/layout'
import '../styles/styles.scss'

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <section id="sendABox" className="container">
          <h2 className="title is-2">Send a Box</h2>
          <p className="content">
            We say "box" but you can really choose whatever vessel works for
            you, be it bag or bin!
            <br /> Just please make sure you wrap each kit individually.
          </p>
          <div className="columns">
            <div className="column">
              <h5 className="title is-5">
                School supplies for
                <br /> Brilliant Detroit
              </h5>
            </div>
            <div className="column">
              <h5 className="title is-5">
                Hygiene kits for
                <br /> Alternatives for Girls
              </h5>
            </div>
            <div className="column">
              <h5 className="title is-5">
                Warming kits for
                <br /> The Noah Project
              </h5>
            </div>
          </div>
        </section>
        <section id="partners" className="container">
          <h2 className="title is-2">Partners</h2>
          <p className="content">
            Are you a local organization serving our community who could use
            supply support?
            <br /> Let us know!
          </p>
          <div className="columns">
            <div className="column">
              <h5 className="title is-5">Brilliant Detroit</h5>
            </div>
            <div className="column">
              <h5 className="title is-5">Alternatives for Girls</h5>
            </div>
            <div className="column">
              <h5 className="title is-5">The Noah Project</h5>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
