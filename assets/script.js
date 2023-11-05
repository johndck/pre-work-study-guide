"use strict";

/*
var topics = "HTML, CSS, Git Javascript";
console.log(topics);

console.log("This is coming together");

console.log("This is coming together, again");
*/

/*
var topic = "HTML";

if (topic === "HTML") {
  console.log("Let's study HTML!");
} else if (topic === "CSS") {
  console.log("Let's study CSS!");
} else if (topic === "Git") {
  console.log("Let's study Git!");
} else if (topic === "JavaScript") {
  console.log("Let's study JavaScript!");
} else {
  console.log("Please try again!");
}
*/

/*
var shapes = ["triangle", "square", "git", "javascript"];
for (var x = 0; x < shapes.length; x++) {
  console.log(shapes[x]);
}*/

var topics = ["HTML", "CSS", "Git", "JavaScript"];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

console.log(randomTopic);

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

function selectTopic() {
  if (randomTopic === "HTML") {
    console.log("Let's study HTML!");
  } else if (randomTopic === "CSS") {
    console.log("Let's study CSS!");
  } else if (randomTopic === "Git") {
    console.log("Let's study Git!");
  } else if (randomTopic === "JavaScript") {
    console.log("Let's study JavaScript!");
  } else {
    console.log("Please try again!");
  }
}

console.log("Here are the topics we learned in the pre-work:");

listTopics();

console.log("Which topic shall we learn today?");

selectTopic();
