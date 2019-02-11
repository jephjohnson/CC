import React from 'react'
import PropTypes from 'prop-types'
const ReactMarkdown = require('react-markdown')

export default class HomePageTemplate extends React.Component {
	
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
		const { heading, description, fullImage, main } = this.props;
		const Logos = Array(4).fill("").map((a, p) =>
			<div key={ p } className="columns is-centered">
				<div className="column is-12-mobile is-10-tablet is-10-widescreen">
					<div className="columns is-multiline is-mobile is-centered logos">
						<ReactMarkdown key={ p.id } renderers={{ paragraph: this.renderParagraph }} alt={ this.props["logos" + (p + 1)].alt } source={ this.props["logos" + (p + 1)] } /> */}
						{/* <div key={ p.id } className="column has-text-centered">{ this.props["logos" + (p + 1)] }</div> */}
					</div>
				</div>
		</div>
		);

		const Features = Array(4).fill("").map((a, p) => {
			return ( 
					<div key={ p } className="columns is-centered features">
						<div className="column is-12-mobile is-10-tablet is-9-desktop is-8-widescreen features--bg"></div>
						<div className="column is-10-mobile is-9-tablet is-10-desktop is-9-widescreen features--outer">
							{ p === 0 || p === 2 ? (
									<div className="columns features--inner">
										<div className="column cross left"></div>  
										<div className="column is-6-desktop features--left" style={{ backgroundImage: `url( ${main["image" + (p + 1)].image })`, backgroundColor: main["image" + (p + 1)].color }}></div>
										<div className="column is-1-desktop arrow-left" style={{ borderBottomColor: main["image" + (p + 1)].color }}></div>
										<div className="column is-12-mobile is-5-tablet is-4-desktop has-text-centered features--right" style={{ backgroundColor: main["image" + (p + 1)].color }}>
											<h5>{ main["image" + (p + 1)].title }</h5>
											<ReactMarkdown renderers={{ paragraph: this.renderParagraph }} source={ main["image" + (p + 1)].subtitle } />
											<ReactMarkdown source={ main["image" + (p + 1)].description } />
										</div>
									</div>
								) : p === 3 ? (
									<div className="columns features--inner right">
											<div className="column cross right"></div>  
											<div className="column is-1-desktop arrow-right" style={{ borderBottomColor: main["image" + (p + 1)].color }}></div>
											<div className="column is-12-mobile is-5-tablet is-4-desktop has-text-centered features--right left" style={{ backgroundColor: main["image" + (p + 1)].color }}>
												<h5>{ main["image" + (p + 1)].title }</h5>
												<ReactMarkdown renderers={{ paragraph: this.renderParagraph }} source={ main["image" + (p + 1)].subtitle } />
												<ReactMarkdown source={ main["image" + (p + 1)].description } />
											</div>
											<div className="column is-6-desktop features--left" style={{ backgroundImage: `url( ${main["image" + (p + 1)].image })`, backgroundColor: main["image" + (p + 1)].color }}>
												<div className="arrow-btn" style={{ borderBottomColor: main["image" + (p + 1)].color }}></div>
												<div className="features-btn" style={{ backgroundColor: main["image" + (p + 1)].color }}><p>New & Noteworthy</p></div>
											</div>
									</div>
								) : (
									<div className="columns features--inner right">
										<div className="column cross right"></div>  
										<div className="column is-1-desktop arrow-right" style={{ borderBottomColor: main["image" + (p + 1)].color }}></div>
										<div className="column is-12-mobile is-5-tablet is-4-desktop has-text-centered features--right left" style={{ backgroundColor: main["image" + (p + 1)].color }}>
											<h5>{ main["image" + (p + 1)].title }</h5>
											<ReactMarkdown renderers={{ paragraph: this.renderParagraph }} source={ main["image" + (p + 1)].subtitle } />
											<ReactMarkdown source={ main["image" + (p + 1)].description } />
										</div>
										<div className="column is-6-desktop features--left" style={{ backgroundImage: `url( ${main["image" + (p + 1)].image })`, backgroundColor: main["image" + (p + 1)].color }}></div>
									</div>
								)}
						</div>
				</div>
			)
		});
    return (
			<div>
				<section className="hero" style={{ backgroundImage: `url(${fullImage})` }}>
						<div className="container">
								<div className="hero-body">
										<div className="columns is-centered">
												<div className="column is-10-tablet is-9-desktop">
												<div className="columns intro">
													<div className="column">
                                <ReactMarkdown className="title has-text-centered" source={ heading } />
                            </div>
                            <div className="column is-2 has-text-centered arrow-wrapper">
															<span className="arrow"></span>
														</div> 
														<div className="column hero-copy">
															<ReactMarkdown className="subtitle has-text-centered" source={ description } />
														</div>
												</div>
												</div>
										</div>
								</div>
						</div>
				</section>
				<section className="section">
					<div className="container">
							<div className="columns is-centered" id="hero-mobile">
								<div className="column is-10-mobile has-text-centered hero-copy">
									<ReactMarkdown className="subtitle has-text-centered" source={ description } />
								</div>
							</div>
							{ Features }
					</div>
				</section>
				<section className="section">
					<div className="container">
							{ Logos }
					</div>
				</section>
			</div>
    )
  }
}

HomePageTemplate.propTypes = {
	fullImage: PropTypes.string,
	heading: PropTypes.string,
	description: PropTypes.string,
	logos1: PropTypes.string,
	logos2: PropTypes.string,
	logos3: PropTypes.string,
	logos4: PropTypes.string,
  main: PropTypes.shape({
  title: PropTypes.string,
	description: PropTypes.string,
	color: PropTypes.string,
	subtitle: PropTypes.string,
  image1: PropTypes.object,
  image2: PropTypes.object,
  image3: PropTypes.object,
  image4: PropTypes.object,
  })
}
