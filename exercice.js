let imgs = document.querySelectorAll(".image");
let paragraphs = document.querySelectorAll(".name");
let number = 0;
let list = ["alfred", "lucas", "the world", "yuji"];
let srcImg;

imgs.forEach((element) => {
  let srcImg = "assets/img" + number + ".png";
  element.setAttribute("src", srcImg);
  paragraphs.forEach((it) => {
    it.textContent = list[number];
    if (number == 3) {
      number = 0;
    } else {
      number += 1;
    }
  });
});

// const square = document.querySelectorAll(".square");
// const h1 = document.getElementById("ok");
// const p = document.querySelector("h1");
// let x = 0;

// while (x < 100) {
//   if (x % 2 == 0) {
//     console.log(x);
//   } else {
//     console.log("error");
//   }
//   x += 1;
// }

// function myFunction() {
//   console.log("Jujutsu Kaisen");
// }

// myFunction();
// console.log(square);

// square[0].style.backgroundColor = "blue";
// square[0].style.color = "white";
// square[1].style.border = "3px solid red";

// function verifyCaracter(chaine) {
//   let str = chaine.substr(1, 100);
//   let result = chaine.replace(str, "");
//   if (result === "") {
//     alert(chaine);
//   } else {
//     alert("alert : Ne depasser pas les cent caractère");
//   }
// }

// verifyCaracter("cbbfbfbfbfbfbfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1");

// function verifyCaracter(chaine) {
//   if (chaine.length < 100) {
//     alert(chaine);
//   } else {
//     alert("alert : Ne depasser pas les cent caractère");
//   }
// }

// verifyCaracter("cbbfbfbfbfbfbfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1");
