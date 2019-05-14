import React from "react";
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators
} from "react-reactive-form";

const TextInput = ({ handler, touched, hasError, meta }) => (
  <div className={`${meta.inputClass || 'col-md-6'} mb-2`}>
    <input
      className="form-control form-control-sm"
      placeholder={`Enter ${meta.label}`}
      {...handler()}
    />
    <span className="text-danger text-monospace" style={{ fontSize: "13px" }}>
      {touched && hasError("required") && `${meta.label} is required`}
    </span>
  </div>
);
const TextArea = ({ handler, touched, hasError, meta }) => (
  <div className="col-md-12">
    <textarea    className="form-control form-control-sm"  placeholder={`Write ${meta.label}....`}
         {...handler()} rows="5" cols="10"
    >
    </textarea>
    <span className="text-danger text-monospace" style={{ fontSize: "13px" }}>
      {touched && hasError("required") && `${meta.label} is required`}
    </span>
  </div>
);
const SelectBox = ({ handler }) => (
  <div className="col-md-6">
    <select className="form-control form-control-sm" {...handler()}>
      <option value="" disabled>
        Select Gender
      </option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
);

class Header extends React.Component {
  loginForm = FormBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    username: ["", Validators.required],
    gender: ["", Validators.required],
    headline: ["", Validators.required],
    story: ["", Validators.required]
  });
  handleReset = () => {
    this.loginForm.reset();
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Form values", this.loginForm.value);
    this.props.saveStory(this.loginForm.value)
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger text-light">
          <a className="navbar-brand text-light" href="/">
            Val Memoirs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <div className="my-2 my-lg-0">
              <button
                type="button"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                className="btn btn-light btn-sm"
              >
                {" "}
                <i className="fa fa-plus-circle" /> Add Story
              </button>
              <button className="btn text-light">
                <i className="fa fa-lightbulb" /> User Guide
              </button>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title text-dark"
                    id="exampleModalLongTitle"
                  >
                    Share New Story
                  </h5>
                  <button
                    onClick={this.handleReset}
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <FieldGroup
                      control={this.loginForm}
                      render={({ get, invalid }) => (
                        <form onSubmit={this.handleSubmit}>
                          <div className="row">
                            <FieldControl
                              name="firstName"
                              render={TextInput}
                              meta={{ label: "First Name" }}
                            />

                            <FieldControl
                              name="lastName"
                              render={TextInput}
                              meta={{ label: "Last Name" }}
                            />
                          </div>

                          <div className="row">
                            <FieldControl
                              name="username"
                              render={TextInput}
                              meta={{ label: "Username" }}
                            />
                            <FieldControl name="gender" render={SelectBox} />
                          </div>
                          <div className="row">
                            <FieldControl
                              name="headline"
                              render={TextInput}
                              meta={{ label: "Headline", inputClass: "col-md-12" }}
                            />
                            <FieldControl name="story" render={TextArea} meta={{label: "A Story"}} />
                          </div>

                          <div className="modal-footer">
                            <button
                              disabled={invalid}
                              type="submit"
                              className="btn btn-primary"
                            >
                              Save changes
                            </button>
                          </div>
                        </form>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
