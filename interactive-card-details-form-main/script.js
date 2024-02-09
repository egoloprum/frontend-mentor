let card_name = document.getElementById("input-name");
let card_number = document.getElementById("input-number");
let card_month = document.getElementById("input-month");
let card_year = document.getElementById("input-year");
let card_cvc = document.getElementById("input-cvc");

let error_name = document.getElementById("error-name");
let error_number = document.getElementById("error-number");
let error_date = document.getElementById("error-date");
let error_cvc = document.getElementById("error-cvc");

let card_btn = document.getElementById("card-button");

card_number.addEventListener("input", () => card_number.value = formatNumber(card_number.value.replaceAll(" ", "")));

const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
  if (index !== 0 && !(index % 4)) seed += " ";
  return seed + next;
}, "");



card_btn.addEventListener("click", function(e) {
   const digits_only = string => [...string].every(c => '0123456789'.includes(c));
   let error_count = 4;

   if (digits_only(card_number.value) && card_number.value.length != 0 || card_number.value.length == 19) {
      error_number.setAttribute("style", "display: none");
      error_count--;
   }
   else {
      error_number.setAttribute("style", "display: block");
   }

   if (card_name.value.length != 0) {
      error_name.setAttribute("style", "display: none");
      error_count--;
   }
   else {
      error_name.setAttribute("style", "display: block");
   }

   if ( (card_month.value.length != 0 && card_year.value.length != 0) &&
         (digits_only(card_month.value) && digits_only(card_year.value) &&
         (card_month.value >= 0 && card_month.value <= 12) &&
         (card_year.value >= 24 && card_year.value <= 30 ))) {
      error_date.setAttribute("style", "display: none");
      error_count--;
   }
   else {
      error_date.setAttribute("style", "display: block");
   }

   if ( (card_cvc.value.length == 3 && card_cvc.value <= 999 ) && ( digits_only(card_cvc.value) )  ) {
      error_cvc.setAttribute("style", "display: none");
      error_count--;
   }
   else {
      error_cvc.setAttribute("style", "display: block");
   }

   if (error_count == 0) {
      document.getElementById("numbers").innerHTML = card_number.value;
      document.getElementById("card-name").innerHTML = card_name.value;
      document.getElementById("card-month").innerHTML = card_month.value;
      document.getElementById("card-year").innerHTML = card_year.value;
      document.getElementById("card-cvc").innerHTML = card_cvc.value;
   } 


});
