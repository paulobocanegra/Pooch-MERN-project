import * as util from '../util/matches_util'

export const RECEIVE_MATCH = 'RECEIVE_MATCH'

export const receiveMatch = match => ({
   type: RECEIVE_MATCH,
   match
})

export const fetchMatch = matchId => dispatch => (
   util.fetchMatch(matchId)
      .then( match => dispatch(receiveMatch(match)) )
      .catch( err => console.log(err) )
)

export const fetchMatches = matchIds => dispatch =>(
   matchIds.forEach( matchId => {
      util.fetchMatch(matchId)
         .then( match => dispatch(receiveMatch(match)))
         .catch( err => console.log(err) )
   })
)

export const createMatch = match => dispatch => (
   util.createMatch(match)
      .then( match => dispatch(receiveMatch(match)) )
      .catch( err => console.log(err) )
)

export const sendMessage = (matchId, data) => dispatch =>(
   util.sendMessage(matchId, data)
      .then( (match) => {
         util.fetchMatch(match._id)
            .then(match => dispatch(receiveMatch(match)))
      })
)
