let custom_btn = document.getElementById("custom-tip");

custom_btn.addEventListener("click", function(e) {
   if (custom_btn.className == "tip input") {
      
   }
   else {
      custom_btn.classList.add("input");
      let input = document.createElement("input");
      custom_btn.innerHTML = "";
      custom_btn.append(input);
   }
});

let total_cost = document.getElementById("total-cost");
let tip_cost = document.getElementById("tip-cost");

let tips = document.getElementsByClassName("tip");
for (let i = 0; i < tips.length; i++) {

   tips[i].addEventListener("click", function(e) {
      if (tips[i].className == "tip clicked") {
         tips[i].classList.remove("clicked");
         tips[i].setAttribute("style", "background: var(--clr-very-dark)");
      }
      else {
         tips[i].classList.add("clicked");
         tips[i].setAttribute("style", "background: var(--clr-strong-cyan)");
      }
   });
}


function tip_percent() {
   let tip = 0;

   for (let i = 0; i < tips.length; i++) {
      if (tips[i].className == "tip clicked") {
         tip = tips[i].innerHTML.split("%")[0];
      }
   }
   return tip;
}

let bill_input = document.querySelector(".bill-input");
bill_input.addEventListener("keyup", function(e) {
   if (bill_input.value == "") {
      total_cost.children[0].innerHTML = "0.00";
   }
});

let people_input = document.querySelector(".people-input");
people_input.addEventListener("keyup", function(e) {
   let cost = 0;
   let tip = tip_percent();
   tip = tip / 100;

   console.log(tip);

   if ( people_input.value == "0" || people_input.value == "" ) {
      
   }
   else {
      cost = parseInt(bill_input.value) * tip / parseInt(people_input.value);
      let new_cost = parseInt(bill_input.value) / parseInt(people_input.value);
      tip_cost.children[0].innerHTML = (new_cost + cost ).toFixed(2);
      total_cost.children[0].innerHTML = cost.toFixed(2);
   }
});
