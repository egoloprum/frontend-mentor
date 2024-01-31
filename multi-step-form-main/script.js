function show_hide() {
   try {
      let right_side = document.getElementsByClassName('right-side');
      right_side = [
         document.getElementById("side-1"),
         document.getElementById("side-2"),
         document.getElementById("side-3"),
         document.getElementById("side-4"),
         document.getElementById("side-5")
      ];
   
      for (let i = 0; i < right_side.length; i++) {
         let balls = document.getElementsByClassName('ball');
   
         if (right_side[i].className == "right-side show") {
            balls[i].setAttribute("style", `width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            border: none;
            background: var(--clr-pastel);
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--clr-marine);`);
         }
         else {
            balls[i].setAttribute("style", `width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            border: 1px solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--clr-white);`);
         }
      }
   }
   catch (e) {
      console.log(e)
   }
}

show_hide();

try {
   var info_inputs = document.getElementsByClassName("input-info");
   var info_button = document.getElementById("info-button");

   info_button.addEventListener("click", function (e) {
      let counter = 0;
      for (let i = 0; i < info_inputs.length; i++) {
         if (info_inputs[i].value == "") {
            info_inputs[i].setAttribute("style", "border: 1px solid var(--clr-strawberry);");
            info_inputs[i].parentElement.children[0].children[1].setAttribute("style", "display:block;");
            counter++;
         }
         else {
            info_inputs[i].parentElement.children[0].children[1].setAttribute("style", "display:none;");
            info_inputs[i].setAttribute("style", "border: 1px solid var(--clr-light);");
         }
      }

      if (counter == 0) {
         let side_1 = document.getElementById('side-1');
         side_1.setAttribute("style", "display: none;");
         side_1.className = "right-side hide";
         let side_2 = document.getElementById('side-2');
         side_2.setAttribute("style", "display: block;");
         side_2.className = "right-side show";

         show_hide();
      }
   });
}
catch (e) {
   console.log(e);
}

// right side 2 

try {
   let choices = document.getElementsByClassName('choice');

   for (let i = 0; i < choices.length; i++) {
      choices[i].addEventListener("click", function(e) {
         if (choices[i].className == "choice") {
            choices[i].setAttribute("style", "border: 1px solid var(--clr-purplish);");
            choices[i].className = "choice selected";

            document.getElementById("select-type-plan").innerHTML = choices[i].children[1].children[0].innerHTML;
         }
         else {
            choices[i].setAttribute("style", "border: 1px solid var(--clr-light);");
            choices[i].className = "choice";

            document.getElementById("select-type-plan").innerHTML = "";
         }
      });
   }
}
catch (e) {
   console.log(e);
}

try {
   let switch_ball = document.getElementById("switch-ball");
   switch_ball.addEventListener("click", function(e) {
      if (switch_ball.className == "switch-ball left") {
         switch_ball.className = "switch-ball right";
         switch_ball.setAttribute("style", "margin-left: 10px; margin-right: -10px;");
         document.getElementById("switch-monthly").setAttribute("style", "color: var(--clr-cool);");
         document.getElementById("switch-yearly").setAttribute("style", "color: var(--clr-marine);");

         let monthly_free = document.createElement("span");
         monthly_free.innerHTML = "2 months free"; 
         let monthly_free1 = document.createElement("span");
         monthly_free1.innerHTML = "2 months free"; 
         let monthly_free2 = document.createElement("span");
         monthly_free2.innerHTML = "2 months free"; 

         document.getElementById("cost-arcade").innerHTML = "$90/yr";
         document.getElementById("cost-arcade").insertAdjacentElement("afterend", monthly_free);
         document.getElementById("cost-advanced").innerHTML = "$120/yr";
         document.getElementById("cost-advanced").insertAdjacentElement("afterend", monthly_free1);
         document.getElementById("cost-pro").innerHTML = "$150/yr";
         document.getElementById("cost-pro").insertAdjacentElement("afterend", monthly_free2);

         document.getElementById("select-plan").innerHTML = "yearly";
      }
      else {
         switch_ball.className = "switch-ball left";
         switch_ball.setAttribute("style", "margin-left: -10px; margin-right: 10px;");
         document.getElementById("switch-monthly").setAttribute("style", "color: var(--clr-marine);");
         document.getElementById("switch-yearly").setAttribute("style", "color: var(--clr-cool);");

         document.getElementById("cost-arcade").innerHTML = "$9/mo";
         document.getElementById("cost-advanced").innerHTML = "$12/mo";
         document.getElementById("cost-pro").innerHTML = "$15/mo";
         document.getElementById("cost-arcade").nextElementSibling.remove();
         document.getElementById("cost-advanced").nextElementSibling.remove();
         document.getElementById("cost-pro").nextElementSibling.remove();

         document.getElementById("select-plan").innerHTML = "monthly";
      }
   });
}
catch (e) {
   console.log(e);
}

try {
   let next_step = document.getElementById("next-step-2");
   next_step.addEventListener("click", function(e) {
      let side_2 = document.getElementById('side-2');
      side_2.setAttribute("style", "display: none;");
      side_2.className = "right-side hide";

      let side_3 = document.getElementById('side-3');
      side_3.setAttribute("style", "display: block;");
      side_3.className = "right-side show";

      if (document.getElementById("select-plan").innerHTML == "yearly") {
         document.getElementById("add-on-cost-1").innerHTML = "$20/yr";
         document.getElementById("add-on-cost-2").innerHTML = "$10/yr";
         document.getElementById("add-on-cost-3").innerHTML = "$20/yr";
      }
      else {
         document.getElementById("add-on-cost-1").innerHTML = "$2/mo";
         document.getElementById("add-on-cost-2").innerHTML = "$1/mo";
         document.getElementById("add-on-cost-3").innerHTML = "$2/mo";
      }

      show_hide();
   });
}
catch (e) {
   console.log(e);
}

try {
   let go_back = document.getElementById("go-back-2");
   go_back.addEventListener("click", function(e) {
      let side_2 = document.getElementById('side-2');
      side_2.setAttribute("style", "display: none;");
      side_2.className = "right-side hide";

      let side_1 = document.getElementById('side-1');
      side_1.setAttribute("style", "display: block;");
      side_1.className = "right-side show";

      show_hide();
   });
}
catch (e) {
   console.log(e);
}

// end of right side 2

try {
   let add_ons = document.getElementsByClassName("add-on-each");
   for(let i = 0; i < add_ons.length; i++) {
      add_ons[i].addEventListener("click", function (e) {
         if (add_ons[i].children[0].checked) {
            add_ons[i].children[0].checked = false;
            add_ons[i].setAttribute("style", "background: var(--clr-white);");
            add_ons[i].className = "add-on-each";
         }
         else {
            add_ons[i].children[0].checked = true;
            add_ons[i].setAttribute("style", "background: var(--clr-alabaster);");
            add_ons[i].className = "add-on-each selected";
         }
      });
   }
}
catch (e) {

}

try {
   let go_back = document.getElementById("go-back-3");
   go_back.addEventListener("click", function(e) {
      let side_3 = document.getElementById('side-3');
      side_3.setAttribute("style", "display: none;");
      side_3.className = "right-side hide";

      let side_2 = document.getElementById('side-2');
      side_2.setAttribute("style", "display: block;");
      side_2.className = "right-side show";

      show_hide();
   });
}
catch (e) {
   console.log(e);
}

try {
   let next_step = document.getElementById("next-step-3");
   next_step.addEventListener("click", function(e) {
      let side_3 = document.getElementById('side-3');
      side_3.setAttribute("style", "display: none;");
      side_3.className = "right-side hide";

      let side_4 = document.getElementById('side-4');
      side_4.setAttribute("style", "display: block;");
      side_4.className = "right-side show";

      let plan_type = document.getElementById("select-type-plan").innerHTML;
      let plan_monthly = document.getElementById("select-plan").innerHTML;
      let add_ons = document.getElementsByClassName("add-on-each selected");

      let price = "0";

      if (plan_monthly == "monthly") {
         if (plan_type == "Arcade") {
            price = "$9/mo";
         }
         else if (plan_type == "Advanced") {
            price = "$12/mo";
         }
         else {
            price = "$15/mo";
         }
      }
      else {
         if (plan_type == "Arcade") {
            price = "$90/yr";
         }
         else if (plan_type == "Advanced") {
            price = "$120/yr";
         }
         else {
            price = "$150/yr";
         }
      }

      let bot_div = document.createElement("div");

      for (let i = 0; i < add_ons.length; i++) {
         let p = document.createElement("p");
         let span1 = document.createElement("span");
         span1.innerHTML = add_ons[i].children[1].children[0].innerHTML;
         p.append(span1);
         let span2 = document.createElement("span");
         span2.className = "sum-price";
         span2.innerHTML = add_ons[i].children[2].innerHTML;
         p.append(span2);
         p.setAttribute("style", "display: flex; justify-content:space-between; font-weight: var(--fw-normal); color: var(--clr-cool); font-size: 14px;");
         bot_div.append(p);
      }

      let total_plan = document.getElementById("total-plan");
      total_plan.innerHTML = `<div style="display: flex; justify-content:space-between; font-size: 14px;">
      <p style="display: flex; flex-direction: column;">
        <span style="color: var(--clr-marine); font-weight: var(--fw-normal);">${plan_type} (${plan_monthly})</span>
        <span>Change</span>
      </p>
      <p class="sum-price" style="color: var(--clr-marine); font-weight: var(--fw-normal);">${price}</p>
      </div><hr>
      ${bot_div.innerHTML}`;

      let sum = document.getElementsByClassName("sum-price");
      let qwerty = 0;
      for(let i = 0; i < sum.length; i++) {
         qwerty += parseInt(sum[i].innerHTML.replace(/\D/g, ""));
      }

      let result_total = document.getElementById("result-total");
      if (qwerty > 100) {
         result_total.innerHTML = "$" + qwerty.toString() + "/yr";
      }
      else {
         result_total.innerHTML = "$" + qwerty.toString() + "/mo";
      }

      show_hide();
   });
}
catch (e) {
   console.log(e);
}

// end of right side 3

try {
   let go_back = document.getElementById("go-back-4");
   go_back.addEventListener("click", function(e) {
      let side_4 = document.getElementById('side-4');
      side_4.setAttribute("style", "display: none;");
      side_4.className = "right-side hide";

      let side_3 = document.getElementById('side-3');
      side_3.setAttribute("style", "display: block;");
      side_3.className = "right-side show";

      show_hide();
   });
}
catch (e) {
   console.log(e);
}

try {
   let next_step = document.getElementById("next-step-4");
   next_step.addEventListener("click", function(e) {
      let side_4 = document.getElementById('side-4');
      side_4.setAttribute("style", "display: none;");
      side_4.className = "right-side hide";

      let side_5 = document.getElementById('side-5');
      side_5.setAttribute("style", "display: block;");
      side_5.className = "right-side show";

      show_hide();
   });
}
catch (e) {
   console.log(e);
}
