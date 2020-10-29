export const fetchDogs = (currentUserId, dogs=[]) => {
   debugger
   let ownedDogs = dogs.filter( dog => dog.owner = currentUserId );
   return ownedDogs;
}