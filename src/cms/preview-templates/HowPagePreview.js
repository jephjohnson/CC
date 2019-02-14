import React from 'react'
import PropTypes from 'prop-types'
import HowPageTemplate from '../../components/How'

const HowPagePreview = ({ entry, getAsset }) => {
  return (
    <HowPageTemplate
      fullImage={entry.getIn(['data', 'full_image'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      main={{
        image1: {
            title: entry.getIn(['data', 'main', 'image1', 'title']),
            description: entry.getIn(['data', 'main', 'image1', 'description']),
            subtitle: entry.getIn(['data', 'main', 'image1', 'subtitle']),
            image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
            alt: entry.getIn(['data', 'main', 'image1', 'alt']),
        },
        image2: {
            title: entry.getIn(['data', 'main', 'image2', 'title']),
            description: entry.getIn(['data', 'main', 'image2', 'description']),
            subtitle: entry.getIn(['data', 'main', 'image2', 'subtitle']),
            image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
            alt: entry.getIn(['data', 'main', 'image2', 'alt']),
        },
        image3: {
            title: entry.getIn(['data', 'main', 'image3', 'title']),
            description: entry.getIn(['data', 'main', 'image3', 'description']),
            subtitle: entry.getIn(['data', 'main', 'image3', 'subtitle']),
            image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
            alt: entry.getIn(['data', 'main', 'image3', 'alt']),
            color: entry.getIn(['data', 'main', 'image3', 'color']),
        },
        image4: {
            title: entry.getIn(['data', 'main', 'image4', 'title']),
            description: entry.getIn(['data', 'main', 'image4', 'description']),
            subtitle: entry.getIn(['data', 'main', 'image4', 'subtitle']),
            image: getAsset(entry.getIn(['data', 'main', 'image4', 'image'])),
            alt: entry.getIn(['data', 'main', 'image4', 'alt']),
            color: entry.getIn(['data', 'main', 'image4', 'color']),
        },
      }}
    />
  )
}

HowPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HowPreview
