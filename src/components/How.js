import React from 'react'
import PropTypes from 'prop-types'
const ReactMarkdown = require('react-markdown')


export default class HowPageTemplate extends React.Component {

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
    const { fullImage, heading, main } = this.props;
		
		const Modules = Array(4).fill("").map((a, p) =>
      <div key={ p } className="columns is-centered how-modules"> 
        <div className="column is-10-tablet is-10-desktop">
          <div className="box">
            <article className="media offwhite">
              <div className="media-left">
                <figure className="image">
                    <img src={ main["image" + (p + 1)].image } alt={ main["image" + (p + 1)].alt } />
                    <span className="how-modules--overlay"></span>
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
                              <ReactMarkdown className="title has-text-centered how-heading" source={ heading } />
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
            {Modules}
          </div>
        </section>
      </div>
    )
  }
}

HowPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  fullImage: PropTypes.string,
  heading: PropTypes.string,
  main: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		subtitle: PropTypes.string,
		image1: PropTypes.object,
		image2: PropTypes.object,
		image3: PropTypes.object,
		image4: PropTypes.object,
  })
}

