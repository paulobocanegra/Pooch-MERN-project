import React from "react";
import * as FetchItems from '../../util/fetch_current_user_items';
import "./profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchDogs();
  }

  render() {
    const { currentUser, logout } = this.props;
    return (
      <div>
      <div className="Nav-bar">
        <div className="Nav-left">
          <img className="Logo" src="./Pooch-logo.png" alt="" />
          <h1 className="Logo-text">pooch</h1>
        </div>
        <div className="Nav-right">
          <h1 className="Nav-bar-text-greeting">Hello, {currentUser.name}</h1>
          <button className="Nav-button" onClick={logout}>
            LogOut
          </button>
        </div>
      </div>
          <div className="Profile-card">
            <div className="Profile-card-left">
            <img className="Profile-image" src="./empty_profile.png" alt=""/>
            <textarea className="Bio-input" name="" id="" cols="30" rows="10" placeholder="Tell Us About You and your Dog..."></textarea>
          </div>
          <div className="Profile-card-right">
            <button className="Skip-button">Skip</button>

          </div>
      </div>
      </div>
    );
  }
}

export default Profile;
