import React from 'react';

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



      return(
         <div>
            {
               newMatch ? <div> 
                  `${newMatch.name} ${currentUser.name}` 
                  <br/>
                  <button onClick={this.reject}>Hell no</button>
                  <br/>
                  <button onClick={this.like}>Sure why not</button>
               </div>
               : 'No current matches'
            }

         </div>
      )
   }
}