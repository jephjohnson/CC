import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HomePageTemplate from '../components/Home'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
				fullImage={frontmatter.full_image}
				main={frontmatter.main}
        logos1={frontmatter.logos1}
        logos2={frontmatter.logos2}
        logos3={frontmatter.logos3}
        logos4={frontmatter.logos4}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage


export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
				title
				heading
				description
				logos1
				logos2
				logos3
				logos4
				full_image
				main {
					image1 {
						title
						color
						subtitle
						description
						alt
						image
					}
					image2 {
						title
						color
						subtitle
						description
						alt
						image
					}
					image3 {
						title
						color
						subtitle
						description
						alt
						image
					}
					image4 {
						title
						color
						subtitle
						description
						alt
						image
					}
				}
      }
    }
  }
`

