import React from 'react'
import PropTypes from 'prop-types'
const ReactMarkdown = require('react-markdown')


export default class WhoPageTemplate extends React.Component {

  renderParagraph(props) {
		const { children } = props;
		
		if (children && children[0]
			&& children.length === 1
			&& children[0].props
			&& children[0].props.src) { 
			return <div className="column has-text-centered">{children}</div>;
		}

		if (children[0].props.children.value !== "") { 
			return <h6>{children}</h6>;
		}
		
		return <p>{children}</p>;
  }
  
  render() {
    const { fullImage, heading, description, main } = this.props;
		
		const Modules = Array(6).fill("").map((a, p) =>
      <div key={ p } className="columns is-centered who-modules"> 
        <div className="column is-10-tablet is-10-desktop">
          <div className="box">
            <article className="media offwhite">
              <div className="media-left">
                <figure className="image">
                    <span className="who-modules--overlay"></span>
                    <img src={ main["image" + (p + 1)].image } alt={ main["image" + (p + 1)].alt } />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h3>{ main["image" + (p + 1)].title }</h3>
                  <ReactMarkdown renderers={{ paragraph: this.renderParagraph }} source={ main["image" + (p + 1)].subtitle } />
                  <ReactMarkdown source={ main["image" + (p + 1)].description } />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
		);
    return (
      <div>
        <section className="hero" style={{ backgroundImage: `url(${ fullImage })` }}>
          <div className="container">
              <div className="hero-body">
                <div className="columns is-centered">
                    <div className="column is-10-tablet is-9-desktop">
                      <div className="columns">
                          <div className="column">
                              <ReactMarkdown className="title has-text-centered" source={ heading } />
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
        <section className="section who-section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-10-tablet is-7-desktop">
                  <div className="columns">
                      <div className="column">
                        <h3 className="has-text-centered">Our Leaders.</h3>
                        <ReactMarkdown className="has-text-centered" source={ description } />
                      </div>
                  </div>
              </div>
            </div>
            {Modules}
          </div>
        </section>
        <section className="section who-section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-10-tablet is-7-desktop">
                  <div className="columns">
                      <div className="column">
                      <h6 className="has-text-centered who-footer">Attention to detail.<br/>Intellectual Curiosity.<br/>Extraordinary Creativity.</h6>
                        <p className="has-text-centered">Our unique team is looking for individuals looking<br/>to to do what’s never been done before – every day. </p>
                        <div className="field">
                          <div className="control has-text-centered">
                              <button className="button outline" type="submit" disabled>Join Us</button>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>            
          </div>
        </section>
      </div>
    )
  }
}

WhoPageTemplate.propTypes = {
  fullImage: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  main: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		subtitle: PropTypes.string,
		image1: PropTypes.object,
		image2: PropTypes.object,
		image3: PropTypes.object,
    image4: PropTypes.object,
    image5: PropTypes.object,
    image6: PropTypes.object,
  })
}


