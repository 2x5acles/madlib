

const shipName = "The Black Pearl"; // String
const timeOfDay = "bright morning"; // String
const treasureFound = true; // Boolean
const chestContents = 25; // Number
const captain = { name: "Captain Blackbeard", exclamation: "Could it be treasure?" }; // Object


const story = `
  One ${timeOfDay}, I set sail on a pirate ship named ${shipName}. The endless sea stretched endlessly before us. Just then, we spotted a mysterious chest floating in the water. '${captain.exclamation}' the captain exclaimed. We hauled it aboard and opened it. Did you know 5 × 5 equals ${chestContents}? Incredible, right?
`;

document.getElementById("story").innerText = story;

console.log(story);

