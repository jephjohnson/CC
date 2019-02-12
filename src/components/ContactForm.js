import React from "react";
import Success from './Success'
import Loader from './Loader'

function encode(data) {
  const formData = new FormData();
  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  return formData;
}

export default class ContactForm extends React.Component {
  state = { isTrue: true, modalState: false }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleModal = e => {
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  };

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => {
        document.forms[0].reset(); 
        this.setState({ isTrue: false, modalState: true })
      })
      .catch(error => alert(error));
  };

  render() {
    const { firstname, lastname, email, isTrue, modalState } = this.state;
    return (
      <div className="careers">
        <div className="field">
          <div className="control has-text-centered">
              <button className="button outline" type="submit" disabled={!email || !firstname || !lastname} >See Jobs.</button>
          </div>
        </div>
        <h3 className="has-text-centered">JOIN US</h3>
        <form
          name="contact"
          method="post"
          //action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
        <div className="field">
            <div className="control">
                <input className="input" type="text" placeholder="First Name" name="firstname" required={true} onChange={this.handleChange} />
            </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Last Name" name="lastname" required={true} onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="email" placeholder="Email" name="email" required={true} onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="tel" placeholder="Phone" name="phone" onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Role you are seeking" name="role" required={true} onChange={this.handleChange} />
          </div>
        </div>
          <div className="field">
          <div className="control">
            <label className="input" htmlFor="upload-photo">Attach a resume</label>
            <input className="input" id="upload-photo" accept="application/pdf, application/msword" type="file" name="attachment" required={true} onChange={this.handleAttachment} />
          </div>
        </div>
        <div className="field">
          <div className="control has-text-centered">
              <button className="button outline" type="submit" /*disabled={!email || !firstname || !lastname}*/ >Send it.</button>
          </div>
        </div>
        </form>
        {!isTrue ? (
          <Success closeModal={this.toggleModal} modalState={modalState}><h3 className="has-text-centered">Thank You for your submission.</h3></Success>
        ) : (
          <Loader modalState={modalState}/>
        )}
      </div>
    );
  }
}