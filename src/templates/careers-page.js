import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CareersPageTemplate from '../components/Careers'
import { HTMLContent } from '../components/Content'

const CareersPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <CareersPageTemplate
        contentComponent={ HTMLContent }
        title={ post.frontmatter.title }
        fullImage={ post.frontmatter.full_image }
        content={ post.html }
      />
    </Layout>
  )
}

CareersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CareersPage


export const CareersPageQuery = graphql`
  query CareersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        full_image
      }
    }
  }
`

