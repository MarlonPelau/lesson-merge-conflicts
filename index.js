function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(firstP, personB) {
    firstP.friends.push(personB);
    return firstP;
  }
  