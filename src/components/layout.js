import React from 'react'
import { Helmet } from 'react-helmet'
import 'materialize-css'
import { Navbar, NavItem, Icon } from 'react-materialize'
import '../styles/materialize.scss'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Good Box</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main>
        <Navbar
          alignLinks="right"
          brand={
            <a className="brand-logo" href="#">
              Good Box
            </a>
          }
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
        >
          <NavItem href="#sendABox">Send A Box</NavItem>
          <NavItem href="#partners">Partners</NavItem>
        </Navbar>
        {children}
      </main>
      <script
        type="text/javascript"
        src="utils/bin/materialize.min.js"
      ></script>
    </>
  )
}
