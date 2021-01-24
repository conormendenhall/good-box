import React from 'react'

import Layout from '../../components/layout'
import Partner from '../../components/partner'

const NoahProject = () => {
  let noahProject = {
    title: 'The NOAH Project',
  }

  return (
    <Layout>
      <Partner data={noahProject}></Partner>
    </Layout>
  )
}

export default NoahProject
