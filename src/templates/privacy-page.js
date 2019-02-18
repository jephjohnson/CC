import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PrivacyPageTemplate from '../components/Privacy'
import { HTMLContent } from '../components/Content'

const PrivacyPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <PrivacyPageTemplate
        contentComponent={ HTMLContent }
        title={ post.frontmatter.title }
        fullImage={ post.frontmatter.full_image }
        content={ post.html }
      />
    </Layout>
  )
}

PrivacyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PrivacyPage


export const PrivacyPageQuery = graphql`
  query PrivacyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        full_image
      }
    }
  }
`

