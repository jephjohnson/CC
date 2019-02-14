import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WhoPageTemplate from '../components/Who'
import { HTMLContent } from '../components/Content'

const WhoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <WhoPageTemplate
        contentComponent={ HTMLContent }
        fullImage={ frontmatter.full_image }
        heading={ frontmatter.heading }
        description={ frontmatter.description }
        main={ frontmatter.main }
      />
    </Layout>
  )
}

WhoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default WhoPage


export const WhoPageQuery = graphql`
  query WhoPage($id: String!) {
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
            subtitle
            description
          }
          image2 {
            image
            alt
            title
            subtitle
            description
          }
          image3 {
            image
            alt
            title
            subtitle
            description
          }
          image4 {
            image
            alt
            title
            subtitle
            description
          }
          image5 {
            image
            alt
            title
            subtitle
            description
          }
          image6 {
            image
            alt
            title
            subtitle
            description
          }
        }
      }
    }
  }
`



