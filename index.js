function scuberGreetingForFeet(nums){
  let result
  if (nums < 400){
    return"This one is on me!"
  } else if (nums > 400 && nums < 2000){
    return "That will be twenty bucks."
  } else if (nums > 2000 && nums < 2500){
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
  
}

function ternaryCheckCity(location){
  // Write your code here!
  
  return (location == "NYC" ? "Ok, sounds good." : "No go.")
};

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  };
};