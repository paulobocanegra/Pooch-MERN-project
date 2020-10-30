import React from 'react';
import {Link} from 'react-router-dom';

export default class DogRegistration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            age:"",
            breed:"",
            sex:"",
            size:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(fieldType){
    return (e) => {
      let value = e.currentTarget.value;
      if(fieldType === 'age') {
        value = isNaN(value) ? "" : parseInt(value);
      }
      this.setState({ [fieldType]: value });
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let dog = Object.assign({}, this.state, { owner: this.props.currentUser.id })
    this.props.composeDog(dog)
      .then(this.props.history.push("/profile"));
  }

    render(){
        return (
          <div className="login-form-container">
            <div className="registration-logo-wrapper">
              <img
                className="Registration-logo"
                src="./Pooch-logo.png"
                alt=""
              />
              <h1 className="Pooch-logo-text1">pooch</h1>
            </div>
            <form className="Registration-form" onSubmit={this.handleSubmit}>
              <h1 className="Registration-header">
                Now Tell Us About Your Dog
              </h1>
              <div className="login-form">
                <img
                  className="Onboarding-pic"
                  src="./dog-info-pic.png"
                  alt=""
                />
                <div className="Registration-input-wrapper">
                  <input
                    className="Registration-input"
                    type="text"
                    value={this.state.name}
                    placeholder="Dog's Name"
                    onChange={this.handleChange("name")}
                  />

                  <input
                    className="Registration-input"
                    type="text"
                    value={this.state.age}
                    placeholder="Dog's Age"
                    onChange={this.handleChange("age")}
                  />

                  <input
                    className="Registration-input"
                    type="text"
                    value={this.state.breed}
                    onChange={this.handleChange("breed")}
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
                        onChange={this.handleChange("sex")}
                      />
                    </label>
                    <label>
                      F
                      <input
                        className="Registration-input-radio"
                        type="radio"
                        name="sex"
                        value="F"
                        onChange={this.handleChange("sex")}
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
                        value="XS"
                        onChange={this.handleChange("size")}
                      />
                    </label>
                    <label>
                      S
                      <input
                        className="Registration-input-radio"
                        type="radio"
                        value="S"
                        onChange={this.handleChange("size")}
                      />
                    </label>
                    <label>
                      M
                      <input
                        className="Registration-input-radio"
                        type="radio"
                        value="M"
                        onChange={this.handleChange("size")}
                      />
                    </label>

                    <label>
                      L
                      <input
                        className="Registration-input-radio"
                        type="radio"
                        value="L"
                        onChange={this.handleChange("size")}
                      />
                    </label>

                    <label>
                      XL
                      <input
                        className="Registration-input-radio"
                        type="radio"
                        value="XL"
                        onChange={this.handleChange("size")}
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


