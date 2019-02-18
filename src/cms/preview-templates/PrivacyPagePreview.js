import React from 'react'
import PropTypes from 'prop-types'
import PrivacyPageTemplate from '../../components/Privacy'

const PrivacyPagePreview = ({ entry, getAsset }) => {
  return (
    <PrivacyPageTemplate
      fullImage={entry.getIn(['data', 'full_image'])}
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      content={entry.getIn(['data', 'body'])}
    />
  )
}

PrivacyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PrivacyPagePreview
