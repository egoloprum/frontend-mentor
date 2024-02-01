let email_input = document.getElementById("email");
let button = document.getElementById("submit");

button.addEventListener("click", function(e) {
   if (email_input.validity.valid && email_input.value != "") {
      let error = document.getElementById("error");
      error.setAttribute("style", "display: none");
      let success_email = document.getElementById("email-success");
      success_email.innerHTML = email_input.value;
      let success = document.getElementById("success");
      success.setAttribute("style", "display: block;");
      let card = document.getElementById("card");
      card.setAttribute("style", "display: none;");
   }
   else {
      let error = document.getElementById("error");
      error.setAttribute("style", "display: block");
      email_input.setAttribute("style", "background: hsl(4, 100%, 94%);; color: var(--clr-tomato);");
   }
});

let success_btn = document.getElementById("success-btn");
success_btn.addEventListener("click", function(e) {
   let success = document.getElementById("success");
   success.setAttribute("style", "display: none;");
   let card = document.getElementById("card");
   card.setAttribute("style", "display: block; display: flex;");
});

window.addEventListener("resize", function(e) {
   if (screen.width < 400) {
      document.getElementById("right-side").children[0].setAttribute("src", "assets/images/illustration-sign-up-mobile.svg");
   }
   else {
      document.getElementById("right-side").children[0].setAttribute("src", "assets/images/illustration-sign-up-desktop.svg");
   } 
})
