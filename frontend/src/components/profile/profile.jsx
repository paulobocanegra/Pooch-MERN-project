import React from "react";
import * as FetchItems from '../../util/fetch_current_user_items';
import "./profile.css";
import { Link }from "react-router-dom"

import MatchMakingComponent from '../match_making/match_making_container'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       user: {bio: this.props.currentUser.bio},
       uploaded: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchDogs();
    this.props.fetchUsers();
  }

  update(field){
    return e => {this.setState({[field]: e.currentTarget.value})}
  }

  handleSubmit(e) {
    e.preventDefault();
    if ( this.state.uploaded ){
      const formData = new FormData();
      formData.append("image", this.state.photoFile);
      this.props.uploadPhoto(this.props.currentUser.id, formData);
    }  
    this.props.updateUser(this.props.currentUser.id, this.state)
      .then(this.props.history.push("/feed"))
  }

  handleFile(e) {
    this.setState({ uploaded: true })
    const file = e.currentTarget.files[0];
    const filereader = new FileReader();
    filereader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: filereader.result });
    };
    if (file) {
      filereader.readAsDataURL(file);
    }
  }

  render() {
    const { currentUser, logout } = this.props;
    const previewImage = this.state.photoUrl ? (
      <img className="image-preview" src={this.state.photoUrl} />
    ) : (
      <img className="Profile-image" src="./empty_profile.png" alt="" />
    );
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
        <form onSubmit={this.handleSubmit} className="Profile-card">
          <div className="Profile-card-left">
            
            {previewImage}
            <div  className="profile-form" onSubmit={this.handleSubmit}>
            <input
              className="add-avatar-button"
              type="file"
              onChange={this.handleFile.bind(this)}
            /> 
            </div>
            <textarea
              className="Bio-input"
              name=""
              id=""
              cols="30"
              rows="10"
              value={this.props.currentUser.bio}
              // defaultValue={this.props.currentUser.bio}
              onChange={this.update("bio")}
              placeholder="Tell Us About You and your Dog..."
            ></textarea>
          </div>
          <div className="Profile-card-right">
            <div className="Profile-buttons">
              <Link to="/feed" className="Skip-button">Skip</Link>
              <button className="Start-button">Get Started!</button>
            </div>
          </div>
        </form>
        <div>
          <MatchMakingComponent />
        </div>
      </div>
    );
  }
}

export default Profile;
