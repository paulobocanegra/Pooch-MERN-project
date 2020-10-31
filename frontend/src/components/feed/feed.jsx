import React from 'react';
import { fetchUser } from '../../util/user_util';
import './feed.css';
import { photoSelector } from "./photo";

class Feed extends React.Component{
    constructor(props) {
    super(props);
  }

  componentDidMount() {
    let currentUser = this.props.fetchUser(this.props.currentUserId).then(this.props.fetchUsers())
    this.setState({ currentUser: currentUser });
  }

    render() {
    let currentUserPhoto = this.props.currentUser
      ? this.props.currentUser.photos[0]
      : null;
    let currentUserName = this.props.currentUser
      ? this.props.currentUser.name
      : null;

    return (
      <div className="main-discover-center">
        <div className="box-discover">
          <div className="Message-center">
            <div className="Message-innerbox">
              <div className="User-avatar-container">
                <img className="User-avatar" src={currentUserPhoto} alt="" />
                <p className="name">{currentUserName}</p>
                <div className="user-icon">
                  <i class="fas fa-user"></i>
                </div>
              </div>
              <input
                className="Search-matches"
                type="search"
                placeholder="Search Play Mates"
              />
              <ul>
                <div className="Matched-user">
                  <img
                    className="User-avatar"
                    src="./empty_profile.png"
                    alt=""
                  />
                  <p className="new">Name</p>
                </div>
              </ul>
            </div>
          </div>
          <div className="rightSide-container">
            <div className="Discover-nav">
              <div className="discover-nav-left">
                <img className="Logo" src="./Pooch-logo.png" alt="" />
                <h1 className="Logo-text">pooch</h1
              </div>
              <div className="discover-nav-right">
                <h3 className="Nav-bar-welcome">Hello, {currentUserName}</h3>
                <div className="Nav-button2" onClick={this.props.logout}>
                  Logout
                </div>
              </div>
                <div className="picture-bio-container">
                  <div className="picture-bio-inner-container"> 
                    <div className="picture-container"></div>
                    <div className="bio-container"></div>
                  </div>
                  <div className="yes-no-container">
                    <div className="rej-button">X</div>
                    <img className="paw-icon" src="./paw-solid2.png" alt="" />
                  </div>
            </div>

            <div className="picture-bio-container">
              <div className="picture-bio-inner-container">
                <div className="picture-container"></div>
                <div className="bio-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;