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
    this.state = { name: "", email: "", phone: "", role: "", resume: "", isTrue: true };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => /*window.location = '/admin/'*/this.setState({ name: "", email: "",  phone: "", role: "", resume: "", isTrue: false }))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, role, resume, isTrue } = this.state;
    return (
      <div className="careers">
      <h3 className="has-text-centered">JOIN US</h3>
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="First Name" name="name" value={name} onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Last Name" name="name" value={name} onChange={this.handleChange} />
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
            <label className="input" htmlFor="upload-photo">Attach a resume</label>
            <input className="input" type="file" name="myImage" id="upload-photo" accept="application/pdf,application/msword" name="resume" value={resume} onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control has-text-centered">
            <button className="button outline" type="submit" disabled={!email || !name}>Send it.</button>
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