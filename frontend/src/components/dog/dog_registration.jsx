import React from 'react';
import {Link} from 'react-router-dom';

class DogRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.dog;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.composeDog(this.state)
    ;
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="registration-logo-wrapper">
          <img className="Registration-logo" src="./Pooch-logo.png" alt="" />
          <h1 className="Pooch-logo-text1">pooch</h1>
        </div>
        <form className="Registration-form" onSubmit={this.handleSubmit}>
          <h1 className="Registration-header">Now Tell Us About Your Dog</h1>
          <div className="login-form">
            <img className="Onboarding-pic" src="./dog-info-pic.png" alt="" />
            <div className="Registration-input-wrapper">
              <input
                className="Registration-input"
                type="text"
                onChange={this.update("name")}
                placeholder="Dog's Name"
              />

              <input
                className="Registration-input"
                type="text"
                onChange={this.update("breed")}
                placeholder="Breed"
              />
              <h6 className="Dog-class">Sex</h6>
              <div className="Gender-wrapper">
                <label>
                  M
                  <input
                    className="Registration-input-radio"
                    type="radio"
                    name="sex"
                    value="M"
                    onChange={this.update("sex")}
                  />
                </label>
                <label>
                  F
                  <input
                    className="Registration-input-radio"
                    type="radio"
                    name="sex"
                    value="F"
                    onChange={this.update("sex")}
                  />
                </label>
              </div>
              <h6 className="Dog-class">Size</h6>
              <div className="Size-wrapper">
                <label>
                  XS
                  <input
                    className="Registration-input-radio"
                    type="radio"
                    name="size"
                    value="XS"
                    onChange={this.update("size")}
                  />
                </label>
                <label>
                  S
                  <input
                    className="Registration-input-radio"
                    type="radio"
                    name="size"
                    value="S"
                    onChange={this.update("size")}
                    placeholder="Confirm Password"
                  />
                </label>
                <label>
                  M
                  <input
                    className="Registration-input-radio"
                    type="radio"
                    name="size"
                    value="M"
                    onChange={this.update("size")}
                    placeholder="Confirm Password"
                  />
                </label>

                <label>
                  L
                  <input
                    className="Registration-input-radio"
                    type="radio"
                    name="size"
                    value="L"
                    onChange={this.update("size")}
                    placeholder="Confirm Password"
                  />
                </label>

                <label>
                  XL
                  <input
                    className="Registration-input-radio"
                    type="radio"
                    name="size"
                    value="XL"
                    onChange={this.update("size")}
                    placeholder="Confirm Password"
                  />
                </label>
              </div>

              <input
                className="Registration-button"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default DogRegistration;