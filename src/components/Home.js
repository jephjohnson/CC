import React from 'react'
import PropTypes from 'prop-types'

const HomePageTemplate = ({
  heading,
  description,
  fullImage,
  main
}) => (
    <section className="hero" key={post.id} style={{ backgroundImage: `url(${fullImage})` }}>
        <div className="container">
            <div className="hero-body">
                <div className="columns is-centered">
                    <div className="column is-10-tablet is-9-desktop">
                    <div className="columns intro">
                        <div className="column">
                            <h1>{heading}</h1>
                        </div>
                        <div className="column is-2 has-text-centered arrow-wrapper">
                            <span className="arrow"></span>
                        </div> 
                        <div className="column hero-copy">
                            <p>{description}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

HomePageTemplate.propTypes = {
  fullImage: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  main: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object,
    image4: PropTypes.object,
  })
}

export default HomePageTemplate
