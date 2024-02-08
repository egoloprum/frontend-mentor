document.getElementById("mark").addEventListener("click", function(e) {
   document.querySelector(".notif-count").innerHTML = "0";
   let actives = document.getElementsByClassName("notification");
   let balls = document.getElementsByClassName("unread-ball");

   for (let i = 0; i < actives.length; i++) {
      actives[i].id = "";
   }

   for (let i = 0; i < balls.length; i++) {
      balls[i].setAttribute("style", "display: none;");
   }
})
