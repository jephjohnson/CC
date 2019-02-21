import React from 'react'
import PropTypes from 'prop-types'
import Content from './Content'

const Privacy = ({ fullImage, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <section className="hero" style={{ backgroundImage: `url(${ fullImage })` }}>
        <div className="container">
            <div className="hero-body privacy">
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
            </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
            <div className="columns is-centered">
                  <div className="column is-10-tablet is-7-desktop">
                    <div className="columns">
                        <div className="column">
                        <PageContent className="content privacy-content" content={content} />
                        </div>
                    </div>
                  </div>
              </div>
        </div>
      </section>
    </div>
  )
}

Privacy.propTypes = {
  title: PropTypes.string.isRequired,
  fullImage: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default Privacy
