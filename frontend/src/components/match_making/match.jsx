import React from 'react';
import "./match.css"

const LIKE = 'liked_users';
const REJECT = 'rejected_users';

export default class MatchMaking extends React.Component {

   constructor(props){
      super(props);
      this.state= { unseenUsers: [] };
      this.reject = this.reject.bind(this)
      this.like = this.like.bind(this)
      this.filterUsers = this.filterUsers.bind(this)
   }

   componentDidMount() {
      this.props.fetchUsers().then( () => this.filterUsers() )
   }

   filterUsers() {
      const { currentUser, allUsers } = this.props;
      if ( !currentUser ){
         return
      }
      let seen = currentUser[LIKE].concat(currentUser[REJECT], [currentUser]);
      let unseenUsers = [];
      let i = 0

      while ( unseenUsers.length < 5 && i < allUsers.length) {
         let newUser = allUsers[i];
         let unseen = true;
         // debugger
         seen.forEach( user => {
            if( user._id === newUser._id ) {
               unseen = false;
            }
         })
         if ( unseen ) {
            unseenUsers.push(newUser);
         }
         i++
      }
      this.setState( { unseenUsers: unseenUsers })
   }

   findMatch() {
      let newMatch = this.state.unseenUsers[this.state.unseenUsers.length - 1];
      return newMatch;
   }

   reject(e) {
      e.preventDefault();
      if( this.state.unseenUsers.length === 0 ){
         return this.filterUsers;
      }
      let newUserList = this.state.unseenUsers.slice()
      let user = newUserList.pop()
      this.setState({ unseenUsers: newUserList })
      let rejected = this.props.currentUser[REJECT];
      rejected.push(user)
      this.props.updateUser(this.props.currentUser._id, { [REJECT]: rejected })
   }

   like(e) {
      e.preventDefault();
      if( this.state.unseenUsers.length === 0 ){
         return this.filterUsers;
      }
      let newUserList = this.state.unseenUsers.slice()
      let user = newUserList.pop()
      this.setState({ unseenUsers: newUserList })
      let liked = this.props.currentUser[LIKE];
      liked.push(user)
      this.props.updateUser(this.props.currentUser._id, { [LIKE]: liked })
      this.matchCheck(user)
   }

   matchCheck(user){
      let match = false;
      let id = this.props.currentUser._id;
      user[LIKE].forEach( (like) => {
         if( like._id === id ){
            match = true;
         }
      })

      if( match ){
         this.props.createMatch({currentUser: this.props.currentUser, likedUser: user})
      }
   }

   render() {
      
      let currentUser = this.props.currentUser
      
      if( !currentUser ){
         return null
      }
      let newMatch = this.findMatch()

   



      return (
        <>
          <div>
            {newMatch ? (
              <>
                <div className="picture-bio-inner-container">
                  <img src={newMatch.photos[0]} alt="" className="users-image" />
                  <div className="name-bio-card">
                    <h1 className="new-match-name">{newMatch.name}</h1>

                    <h3 className="user-bio">{newMatch.bio}</h3>
                  </div>
                </div>
                <div className="yes-no-container">
                  <div className="rej-button" onClick={this.reject}>
                    X
                  </div>
                  <img
                    className="paw-icon"
                    src="./paw-solid2.png"
                    alt=""
                    onClick={this.like}
                  />
                </div>
              </>
            ) : (
              "No current matches"
            )}
          </div>
        </>
      );
   }
}