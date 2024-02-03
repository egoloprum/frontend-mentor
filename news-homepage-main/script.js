try {
let btn = document.getElementById("icon");
   btn.addEventListener("click", function(e) {
      let sidebar = document.getElementById("sidebar");
      sidebar.setAttribute("style", "display: block; display:flex;");
      let wrapper = document.getElementById("body");
      wrapper.setAttribute("style", "background: grey;");
   })
}
catch (e) {

}

try {
   let close = document.getElementById("side-icon");
   close.addEventListener("click", function(e) {
         let sidebar = document.getElementById("sidebar");
         sidebar.setAttribute("style", "display: none;");
         let wrapper = document.getElementById("body");
         wrapper.setAttribute("style", "background: none;");
      })
   }
   catch (e) {
   
   }
   