import React from 'react'
import PropTypes from 'prop-types'
import Content from './Content'
import ContactForm from './ContactForm'


const Who = ({ full_image, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <section className="hero" style={{ backgroundImage: `url(${ full_image })` }}>
        <div className="container">
            <div className="hero-body">
              <div className="columns is-centered">
                  <div className="column is-10-tablet is-9-desktop">
                    <div className="columns">
                        <div className="column">
                          <div className="title has-text-centered">
                            <h1>{title}</h1>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="columns is-centered">
                <div className="column is-10-tablet is-9-desktop">
                  <div className="columns">
                      <div className="column has-text-centered arrow-wrapper">
                        <span className="arrow"></span>
                      </div> 
                  </div>
                </div>
                </div>
            </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
            <div className="columns is-centered">
                  <div className="column is-10-tablet is-7-desktop">
                    <div className="columns">
                        <div className="column">
                        <PageContent className="content has-text-centered" content={content} />
                        <ContactForm />
                        </div>
                    </div>
                  </div>
              </div>
        </div>
      </section>
    </div>
  )
}

Who.propTypes = {
  title: PropTypes.string.isRequired,
  full_image: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default Who
