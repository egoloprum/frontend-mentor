let columns = document.getElementsByClassName("column");
let amounts = [ 17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48 ];

let date = new Date().getDay();

for (let i = 0; i < columns.length; i++) {
   columns[i].setAttribute("style", `height: ${2 * amounts[i] }px;`);
   if (date - 1 == i) {
      columns[i].id = "column active";
      columns[i].setAttribute("style", `height: ${2 * amounts[i] }px; background: hsl(186, 34%, 60%);`);  
   }
}

for (let i = 0; i < columns.length; i++) {
   let new_div = document.createElement("div");
   new_div.className = "value";

   columns[i].addEventListener("mouseover", function(e) {
      new_div.innerHTML = amounts[i];
      columns[i].parentElement.insertBefore(new_div, columns[i].parentElement.firstChild );
   });

   columns[i].addEventListener("mouseout", function(e) {
      if (columns[i].parentElement.firstChild.className == "value") {
         columns[i].parentElement.firstChild.remove();
      }
      console.log(i);
   });
}
