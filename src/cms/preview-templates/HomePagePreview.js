import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/Home'

const HomePagePreview = ({ entry, getAsset }) => {
  
    return (
    <HomePageTemplate
      fullImage={entry.getIn(['data', 'full_image'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      logos1={entry.getIn(['data', 'logos1'])}
      logos2={entry.getIn(['data', 'logos2'])}
      logos3={entry.getIn(['data', 'logos3'])}
      logos4={entry.getIn(['data', 'logos4'])}
      main={{
        image1: {
          title: entry.getIn(['data', 'main', 'image1', 'title']),
          description: entry.getIn(['data', 'main', 'image1', 'description']),
          subtitle: entry.getIn(['data', 'main', 'image1', 'subtitle']),
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
          color: entry.getIn(['data', 'main', 'image1', 'color']),
        },
        image2: {
          title: entry.getIn(['data', 'main', 'image2', 'title']),
          description: entry.getIn(['data', 'main', 'image2', 'description']),
          subtitle: entry.getIn(['data', 'main', 'image2', 'subtitle']),
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
          color: entry.getIn(['data', 'main', 'image2', 'color']),
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

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
