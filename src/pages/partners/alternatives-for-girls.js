import React from 'react'

import Layout from '../../components/layout'
import Partner from '../../components/partner'

const AlternativesForGirls = () => {
  let alternativesForGirls = {
    title: 'Alternatives For Girls',
  }

  return (
    <Layout>
      <Partner data={alternativesForGirls}></Partner>
    </Layout>
  )
}

export default AlternativesForGirls
