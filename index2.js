const allUsers = [
    "ahirag",
    "sithun",
    "Alok",
    "Parsuram",
    "Vinayak",
    "Shybm",
    "Sharvan",
    "manav",
  ];
  
  function isUserPresent(user) {
    if (allUsers.includes(user)) {
      console.log(`Yes, ${user} is a valid user.`);
      return true;
    } else {
      console.log(`No, ${user} is not a valid user.`);
      return true;
    }
  }
  
  isUserPresent("sithun");
  
  // OUTPUT: Yes, Mithun is a valid user.
  
  isUserPresent("Someone");
  
  // OUTPUT: No, Someone is not a valid user.