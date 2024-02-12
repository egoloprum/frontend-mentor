let balls = document.getElementsByClassName("ball");

for (let i = 0; i < balls.length; i++) {
   balls[i].addEventListener("click", function(e) {
      colorer();
      balls[i].id = "clicked";
      balls[i].setAttribute("style", "background: var(--clr-orange)");
   });
}

function colorer() {
   for (let i = 0; i < balls.length; i++) {
      balls[i].id = "";
      balls[i].setAttribute("style", "background: var(--clr-medium)");
   }
}

document.getElementById("submit").addEventListener("click", function(e) {
   document.querySelector(".card").setAttribute("style", "display:none");
   document.querySelector(".card-2").setAttribute("style", "display:flex");
   for (let i = 0; i < balls.length; i++) {
      if (balls[i].id == "clicked") {
         console.log(i);
         document.getElementById("selected").innerHTML = i + 1;
         break;
      }
   }
});
