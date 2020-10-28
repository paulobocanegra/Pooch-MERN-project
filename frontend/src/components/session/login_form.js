import React from "react";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import "./login.css"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
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
      password: this.state.password,
    };

    this.props.login(user);
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
    const{closeModal} = this.props
    return (
      <div className="Modal-screen">
        <button onClick={() => closeModal()} className="Modal-button">X</button>
        <form onSubmit={this.handleSubmit}>
          <div className="Login-form" >
            <div className="Logo-wrapper">
              <img className="Login-pooch-logo" src="./Pooch-logo.png" alt=""/>
              <h1 className="Login-pooch-text-logo">pooch</h1>
            </div>
            <div className="Login-input-wrapper">
              <input className="Login-input"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                />
            
              <input
                className="Login-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                />
            
              <input className="Login-form-login-button" type="submit" value="Submit" />
              
              <div className="Redirect">Not A Member Yet?
                <p>Sign Up</p>
              </div>
            </div>
          </div>
          
                {this.renderErrors()}
        </form>
      </div>
    );
  }
}
export default withRouter(LoginForm);
