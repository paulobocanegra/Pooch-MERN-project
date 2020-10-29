import React from 'react';


class Profile extends React.Component{
    constructor(props){
        super(props);
    }

   render(){
       const {currentUser, logout} = this.props;
       return (
         <div>
           <h1>Hello, {currentUser.name}</h1>
           <button onClick={logout}>LogOut</button>
         </div>
       );
   }
}

export default Profile;