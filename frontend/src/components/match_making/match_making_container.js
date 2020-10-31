import { connect } from "react-redux";
import {
   fetchMatches,
   createMatch
} from '../../actions/match_actions';
import { fetchUsers, updateUser } from '../../actions/user_actions'
import MatchMaking from './match';


const mSTP = state => {
   let currentUser;
   const currentUserId = state.session.user.id;
   let allUsers = Object.values(state.entities.users)
   allUsers.forEach( user => {
      if( user._id === currentUserId ){
         currentUser = user
      }
   })

   return {
      currentUser,
      allUsers
   }
}

const mDTP = dispatch => ({
   fetchMatches: (userMatchIds) => dispatch(fetchMatches(userMatchIds)),
   createMatch: (match) => dispatch(createMatch(match)),
   fetchUsers: () => dispatch(fetchUsers()),
   updateUser: (userId, user) => dispatch(updateUser(userId, user))
})

export default connect(mSTP, mDTP)(MatchMaking)