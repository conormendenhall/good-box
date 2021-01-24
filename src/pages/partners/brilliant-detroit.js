import React from 'react'

import Layout from '../../components/layout'
import Partner from '../../components/partner'

const BrilliantDetroit = () => {
  let brilliantDetroit = {
    title: 'School Supplies for Brilliant Detroit',
  }

  return (
    <Layout>
      <Partner data={brilliantDetroit}></Partner>
    </Layout>
  )
}

export default BrilliantDetroit
