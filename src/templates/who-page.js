import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WhoPageTemplate from '../components/Who'
import { HTMLContent } from '../components/Content'

const WhoPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <WhoPageTemplate
        contentComponent={ HTMLContent }
        title={ post.frontmatter.title }
        full_image={ post.frontmatter.full_image }
        heading={ post.heading }
        content={ post.html }
      />
    </Layout>
  )
}

WhoPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WhoPage


export const WhoPageQuery = graphql`
  query WhoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        full_image
        heading
      }
    }
  }
`

