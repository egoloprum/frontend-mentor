document.querySelector(".menu-btn").addEventListener("click", function(e) {
   if (document.querySelector(".menu-btn").id == "hide" ) {
      document.querySelector(".sidebar").setAttribute("style", "display: flex;");
      document.querySelector(".menu-btn").id = "show";
   } else {
      document.querySelector(".sidebar").setAttribute("style", "display: none;");
      document.querySelector(".menu-btn").id = "hide";
   }
});
