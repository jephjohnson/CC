import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HowPageTemplate from '../components/How'
import { HTMLContent } from '../components/Content'

const HowPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HowPageTemplate
        contentComponent={ HTMLContent }
        title={ frontmatter.title }
        full_image={ frontmatter.full_image }
        heading={ frontmatter.heading }
        main={ frontmatter.main }
      />
    </Layout>
  )
}

HowPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HowPage


export const HowPageQuery = graphql`
  query HowPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        full_image
        heading
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
        }
      }
    }
  }
`

