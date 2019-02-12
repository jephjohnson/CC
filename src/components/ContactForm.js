import React from "react";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
      .then(() => alert("good"))
      .catch(error => alert(error));
  };

  render() {
    return (
        <div className="careers">
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
                <input className="input" type="text" placeholder="First Name" name="firstname" onChange={this.handleChange} />
            </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Last Name" name="lastname" onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="email" placeholder="Email" name="email" onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="tel" placeholder="Phone" name="phone" onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Role you are seeking" name="role" onChange={this.handleChange} />
          </div>
        </div>
          <div className="field">
          <div className="control">
            <label className="input" htmlFor="upload-photo">Attach a resume</label>
            <input className="input" id="upload-photo" accept="application/pdf, application/msword" type="file" name="attachment" onChange={this.handleAttachment} />
          </div>
        </div>
          <div className="field">
            <div className="control has-text-centered">
                <button className="button outline" type="submit" >Send it.</button>
            </div>
        </div>
        </form>
      </div>
    );
  }
}