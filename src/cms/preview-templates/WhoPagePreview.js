import React from 'react'
import PropTypes from 'prop-types'
import { WhoPageTemplate } from '../../templates/who-page'

const WhoPagePreview = ({ entry, widgetFor }) => (
  <WhoPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

WhoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WhoPagePreview
