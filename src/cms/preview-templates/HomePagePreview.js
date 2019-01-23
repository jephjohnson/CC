import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/Home'

const HomePagePreview = ({ entry, getAsset }) => {
  
    return (
    <HomePageTemplate
      fullImage={entry.getIn(['data', 'full_image'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      main={{
        image1: {
          title: entry.getIn(['data', 'main', 'image1', 'title']),
          description: entry.getIn(['data', 'main', 'description']),
          subtitle: entry.getIn(['data', 'main', 'subtitle']),
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
          color: entry.getIn(['data', 'main', 'color']),
        },
        image2: {
          title: entry.getIn(['data', 'main', 'image2', 'title']),
          description: entry.getIn(['data', 'main', 'description']),
          subtitle: entry.getIn(['data', 'main', 'subtitle']),
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
          color: entry.getIn(['data', 'main', 'color']),
        },
        image3: {
          title: entry.getIn(['data', 'main', 'image3', 'title']),
          description: entry.getIn(['data', 'main', 'description']),
          subtitle: entry.getIn(['data', 'main', 'subtitle']),
          image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
          alt: entry.getIn(['data', 'main', 'image3', 'alt']),
          color: entry.getIn(['data', 'main', 'color']),
        },
        image4: {
            title: entry.getIn(['data', 'main', 'image4', 'title']),
            description: entry.getIn(['data', 'main', 'description']),
            subtitle: entry.getIn(['data', 'main', 'subtitle']),
            image: getAsset(entry.getIn(['data', 'main', 'image4', 'image'])),
            alt: entry.getIn(['data', 'main', 'image4', 'alt']),
            color: entry.getIn(['data', 'main', 'color']),
          },
      }}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
