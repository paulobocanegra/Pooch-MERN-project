import React from 'react';
import './feed.css';


class Feed extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div className="Discover-center">
            <div className="Message-center">
              <img className="User-avatar" src="./empty_profile.png" alt="" />
              <input
                className="Search-matches"
                type="search"
                placeholder="Search Play Mates"
              />
              <ul>
                <div className="Matched-user">
                <img className="User-avatar" src="./empty_profile.png" alt="" />
                <p className="new">New Play Date!</p>
                </div>
              </ul>
            </div>
            <div className="Discover-nav">
                <button onClick={ this.props.logOut}>Logout</button>
            </div>
            
          </div>
        );
    }









}

export default Feed;