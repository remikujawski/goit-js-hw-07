"use strict";
const list1 = document.querySelectorAll(".item");
console.log("Number of categories: " + list1.length);
for (let i = 0; i < list1.length; i++) {
  console.log("Category: " + list1[i].querySelector("h2").textContent);
  console.log("Elemens: " + list1[i].querySelectorAll("li").length);
}
