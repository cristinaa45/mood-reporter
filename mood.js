let userName = "Taylor";
let moddToday = "happy";

function respondToMood(name, mood) {
  console.log("Hi" + name + "!");

  if (mood === "happy") {
    console.log("That's awesome. Keep it going!");
  } else if (mood === "tired") {
    console.log("Don't forget to rest. You've earned it.");
  } else if (mood === "stressed") {
    console.log("Take a breath. Better days are ahead.");
  } else {
    console.log("Thanks for chekig in. Keep being you.");
  }
  for (let i = 0; 1 < 3; i++) {
    console.log("You;ve got this, " + name + "!");
  }
}
respondToMood(userName, moodToday);
