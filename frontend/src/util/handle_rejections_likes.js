const handleMatching = (type, action) => {
   return (currentUser, judgedUser) => {
      action(currentUser.id, { [type]: currentUser[type].push(judgedUser) })
   }
}