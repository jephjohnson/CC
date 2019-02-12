
import React from 'react'
import Success from './Success'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstname: "", lastname: "", email: "", phone: "", role: "", resume: "", isTrue: true };
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      //headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => /*window.location = '/admin/'*/this.setState({ firstname: "", lastname: "", email: "",  phone: "", role: "", resume: "", isTrue: false }))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { firstname, lastname, email, phone, role, resume, isTrue } = this.state;
    return (
      <div className="careers">
      <h3 className="has-text-centered">JOIN US</h3>
      <form name="contact" onSubmit={this.handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="First Name" name="firstname" value={firstname} onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Last Name" name="lastname" value={lastname} onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="tel" placeholder="Phone" name="phone" value={phone} onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Role you are seeking" name="role" value={role} onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            {/*<label className="input" htmlFor="upload-photo">Attach a resume</label>
            <input className="input" type="file" id="upload-photo" accept="application/pdf, application/msword" name="resume" value={resume} onChange={this.handleChange} />
          </div>*/}
          <input
                type="file"
                name="attachment"
                onChange={this.handleAttachment}
              />
        </div>
        <div className="field">
          <div className="control has-text-centered">
            <button className="button outline" type="submit" disabled={!email || !firstname || !lastname}>Send it.</button>
          </div>
        </div>
      </form>
      
      {!isTrue ? (
          <Success />
        ) : (
          null
        )}
      </div>
    );
  }
}