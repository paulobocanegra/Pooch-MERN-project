function photoSelector(CurrentUserId, users,){
    let profilePhoto;
    users.forEach(user => {
        if (user._id === CurrentUserId){
            profilePhoto = user.photos[0];
        }
    });
    return profilePhoto;
}