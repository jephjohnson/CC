import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WhatPageTemplate from '../components/What'
import { HTMLContent } from '../components/Content'

const WhatPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <WhatPageTemplate
        contentComponent={ HTMLContent }
        fullImage={ frontmatter.full_image }
        heading={ frontmatter.heading }
        description={ frontmatter.description }
        main={ frontmatter.main }
      />
    </Layout>
  )
}

WhatPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default WhatPage


export const WhatPageQuery = graphql`
  query WhatPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        full_image
        heading
        description
        main {
          image1 {
            image
            alt
            title
            description
          }
          image2 {
            image
            alt
            title
            description
          }
          image3 {
            image
            alt
            title
            description
          }
          image4 {
            image
            alt
            title
            description
          }
          image5 {
            image
            alt
            title
            description
          }
        }
      }
    }
  }
`



