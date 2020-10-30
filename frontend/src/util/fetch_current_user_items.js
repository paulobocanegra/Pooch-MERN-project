export const fetchDogs = (currentUserId, dogs=[]) => {

   let ownedDogs = dogs.filter( dog => dog.owner = currentUserId );
   return ownedDogs;
}