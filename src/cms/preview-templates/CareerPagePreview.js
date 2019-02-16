import React from 'react'
import PropTypes from 'prop-types'
import CareerPageTemplate from '../../components/Career'

const CareerPagePreview = ({ entry, getAsset }) => {
  return (
    <CareerPageTemplate
      fullImage={entry.getIn(['data', 'full_image'])}
      title={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      content={getAsset('body')}
    />
  )
}

CareerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CareerPagePreview
