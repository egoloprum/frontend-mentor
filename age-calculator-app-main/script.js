

let btn = document.getElementById("button");

btn.addEventListener("click", function(e) {
   let day = document.getElementById("day");
   let month = document.getElementById("month");
   let year = document.getElementById("year");

   let result_day = document.getElementById("result-day");
   let result_month = document.getElementById("result-month");
   let result_year = document.getElementById("result-year");

   let date = `${year.value}/${month.value}/${day.value}`;
   let check_date = new Date(date);
   let current_date = new Date();

   if (!isNaN(check_date) && current_date.getTime() > check_date.getTime()) {

      let age = current_date - check_date;

      year = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
      month = age - year * (1000 * 60 * 60 * 24 * 365.25);
      month = Math.floor(month / (1000 * 60 * 60 * 24 * 12));
      day = age - year * (1000 * 60 * 60 * 24 * 365.25) - month * (1000 * 60 * 60 * 24 * 12);
      day = Math.floor(day / (1000 * 60 * 60 * 24));

      result_day.innerHTML = day;
      result_month.innerHTML = month;
      result_year.innerHTML = year;

      let errors = document.getElementsByClassName("error");
      for(let i = 0; i < errors.length; i++) {
         errors[i].setAttribute("style", "display: none");
      }

      let dates = document.getElementsByClassName("date");
      for(let i = 0; i < dates.length; i++) {
         dates[i].setAttribute("style", "color: var(--clr-smokey);");
      }
   }
   else {
      let errors = document.getElementsByClassName("error");
      for(let i = 0; i < errors.length; i++) {
         errors[i].setAttribute("style", "display: block");
      }

      let dates = document.getElementsByClassName("date");
      for(let i = 0; i < dates.length; i++) {
         dates[i].setAttribute("style", "color: var(--clr-red);");
      }
   }
});
