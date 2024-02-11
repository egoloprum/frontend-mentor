let features = document.getElementById("features");
let company = document.getElementById("company");

let dropdown_1 = document.createElement("div");
dropdown_1.className = "dropdown-1";
dropdown_1.innerHTML = 
`
<p><img src="images/icon-todo.svg" alt=""><span>Todo List</span></p>
<p><img src="images/icon-calendar.svg" alt=""><span>Calendar</span></p>
<p><img src="images/icon-reminders.svg" alt=""><span>Reminders</span></p>
<p><img src="images/icon-planning.svg" alt=""><span>Planning</span></p>
`;

let dropdown_2 = document.createElement("div");
dropdown_2.className = "dropdown-2";
dropdown_2.innerHTML = 
`
<p>History</p>
<p>Our team</p>
<p>Blog</p>
`;

features.appendChild(dropdown_1);
company.appendChild(dropdown_2);

features.addEventListener("click", function(e) {
   if ( features.children[1].className == "down" ) {
      features.children[1].setAttribute("src", "images/icon-arrow-up.svg");
      features.children[1].className = "up";
      features.children[2].setAttribute("style", "display: flex;");
      
   }
   else {
      features.children[1].setAttribute("src", "images/icon-arrow-down.svg");
      features.children[1].className = "down";
      features.children[2].setAttribute("style", "display: none;");
   }
});

company.addEventListener("click", function(e) {
   if ( company.children[1].className == "down" ) {
      company.children[1].setAttribute("src", "images/icon-arrow-up.svg");
      company.children[1].className = "up";
      company.children[2].setAttribute("style", "display: flex;");
   }
   else {
      company.children[1].setAttribute("src", "images/icon-arrow-down.svg");
      company.children[1].className = "down";
      company.children[2].setAttribute("style", "display: none;");
   }
});

let menu_btn = document.getElementById("menu-button");

menu_btn.addEventListener("click", function(e) {
   document.querySelector(".sidebar").setAttribute("style", "display: block");
});

let close_btn = document.getElementById("close-menu");

close_btn.addEventListener("click", function(e) {
   document.querySelector(".sidebar").setAttribute("style", "display: none");
});

let sidebar_features = document.getElementById("sidebar-features");
let sidebar_company = document.getElementById("sidebar-company");

sidebar_features.addEventListener("click", function(e) {
   if ( sidebar_features.children[0].className == "down" ) {
      sidebar_features.children[0].setAttribute("src", "images/icon-arrow-up.svg");
      sidebar_features.children[0].className = "up";
      document.querySelector(".sidebar-features").setAttribute("style", "display: block;");
      
   }
   else {
      sidebar_features.children[0].setAttribute("src", "images/icon-arrow-down.svg");
      sidebar_features.children[0].className = "down";
      document.querySelector(".sidebar-features").setAttribute("style", "display: none;");
   }
})

sidebar_company.addEventListener("click", function(e) {
   if ( sidebar_company.children[0].className == "down" ) {
      sidebar_company.children[0].setAttribute("src", "images/icon-arrow-up.svg");
      sidebar_company.children[0].className = "up";
      document.querySelector(".sidebar-company").setAttribute("style", "display: block;");
      
   }
   else {
      sidebar_company.children[0].setAttribute("src", "images/icon-arrow-down.svg");
      sidebar_company.children[0].className = "down";
      document.querySelector(".sidebar-company").setAttribute("style", "display: none;");
   }
})
