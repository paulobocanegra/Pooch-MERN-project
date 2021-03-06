import React from "react";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import {Link} from "react-router-dom";
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

    this.props.login(user).then(this.props.history.push('/feed'));
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
    const { closeModal } = this.props
    return (
      <div className="Modal-screen">
        <div className="Modal-box">
          <div className="Modal-button" onClick={() => closeModal()}>X</div>
          <div className="Login-form" >
            <form onSubmit={this.handleSubmit}>
              <div className="Logo-wrapper">
                <img className="Login-pooch-logo" src="./Pooch-logo.png" alt="" />
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
                <Link to="/register">Sign Up</Link>
                </div>
              </div>

              {this.renderErrors()}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(LoginForm);