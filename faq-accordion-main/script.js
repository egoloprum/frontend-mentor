let titles = document.getElementsByClassName("title");
let sentences = document.getElementsByClassName("sentence");

for (let i = 0; i < titles.length; i++) {
   titles[i].addEventListener("click", function(e) {
      if (sentences[i].id == "hide") {
         sentences[i].id = "show";
         sentences[i].setAttribute("style", "display: block");
         titles[i].children[1].setAttribute("src", "assets/images/icon-minus.svg");
      }
      else {
         sentences[i].id = "hide";
         sentences[i].setAttribute("style", "display: none");
         titles[i].children[1].setAttribute("src", "assets/images/icon-plus.svg");
      }
   });
}
