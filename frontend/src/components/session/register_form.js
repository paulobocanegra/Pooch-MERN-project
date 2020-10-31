import React from "react";
import { withRouter } from "react-router-dom";
import "./register.css";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        email: "",
        name: "",
        password: "",
        password2: "",
        errors: {},
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
        this.props.history.push("/login");
        }

        this.setState({ errors: nextProps.errors });
    }

    update(field) {
        return (e) =>
        this.setState({
            [field]: e.currentTarget.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
        password2: this.state.password2,
        };
        this.props.register(user, this.props.history)
          .then( () => this.props.login(user) ).then(this.props.history.push('/dogs'));
    }

    renderErrors() {
        return (
        <ul>
            {Object.keys(this.state.errors).map((error, i) => (
            <li key={`error-${i}`}>{this.state.errors[error]}</li>
            ))}
        </ul>
        );
    }

    render() {
        return (
          <div className="login-form-container">
              <div className="registration-logo-wrapper">
                <img className="Registration-logo" src="./Pooch-logo.png" alt=""/>
                <h1 className="Pooch-logo-text1">pooch</h1>
              </div>
            <form className="Registration-form" onSubmit={this.handleSubmit}>
              <h1 className="Registration-header">Lets Get Started!</h1>
              <div className="login-form">
                <img
                  className="Onboarding-pic"
                  src="./onboarding_user.png"
                  alt=""
                />
                <div className="Registration-input-wrapper">
                  <input
                    className="Registration-input"
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                  />

                  <input
                    className="Registration-input"
                    type="text"
                    value={this.state.name}
                    onChange={this.update("name")}
                    placeholder="Name"
                  />

                  <input
                    className="Registration-input"
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                  />

                  <input
                    className="Registration-input"
                    type="password"
                    value={this.state.password2}
                    onChange={this.update("password2")}
                    placeholder="Confirm Password"
                  />
               
                  <input className="Registration-button" type="submit" value="Continue" />
                 
                  {this.renderErrors()}
                </div>
              </div>
            </form>
          </div>
        );
    }
}

export default withRouter(RegisterForm);
