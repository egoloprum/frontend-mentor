let add_input = document.querySelector(".add-list");
items_counter();

add_input.addEventListener("keypress", function(e) {
   if(e.key === "Enter") {

      let list_items = document.querySelectorAll(".list-item");
      let array_of_id = [];

      for (let i = 0; i < list_items.length; i++) {
         array_of_id.push(list_items[i].id);
      }

      let new_id = Math.max(...array_of_id);
      new_id = ++new_id;

      let list_item = document.createElement("div");
      list_item.className = "list-item active";
      list_item.id = new_id;
      list_item.innerHTML = 
      `
      <div class="button">
         <span class="ball" id="ball-${ new_id }" onclick="active_changer(this.id)">
            <img src="images/icon-check.svg" alt="">
         </span>
      </div>
      <div class="list-elem" id="elem-${ new_id }">${ add_input.value }</div>
      `;

      document.querySelector(".list").appendChild(list_item);
      add_input.value = "";

      items_counter();
   }
});

function active_changer(id) {
   id = id.split("-")[1];
   let ball = document.getElementById("ball-" + id);
   let list_elem = document.getElementById("elem-" + id);
   let list_item = document.getElementById(id);

   if ( list_item.className == "list-item completed" ) {
      ball.setAttribute("style", "background: none;");
      ball.children[0].setAttribute("style", "display: none");
      list_elem.setAttribute("style", "color: #fff");
      list_item.className = "list-item active";
   }
   else {
      ball.setAttribute("style", "background: linear-gradient(var(--clr-linear-1), var(--clr-linear-2));");
      ball.children[0].setAttribute("style", "display: block");
      list_elem.setAttribute("style", "color: #a3a3a3; text-decoration: line-through; text-decoration-thickness: 0.5px; text-decoration-color: #7f7f7f;")
      list_item.className = "list-item completed";
   }

   items_counter();
}

function items_counter() {
   let items = document.querySelectorAll(".list-item.active");
   document.getElementById("items-left").innerHTML = items.length;
}

document.getElementById("btn-all").addEventListener("click", function(e) {
   let list = document.querySelector(".list");
   let active_elems = document.querySelectorAll(".list-item.active");
   let completed_elems = document.querySelectorAll(".list-item.completed");

   let elems = [];

   for (let i = 0; i < active_elems.length; i++) {
      elems.push(active_elems[i]);
      active_elems[i].setAttribute("style", "display: flex");
   }

   for (let i = 0; i < completed_elems.length; i++) {
      elems.push(completed_elems[i]);
      completed_elems[i].setAttribute("style", "display: flex");
   }

   elems = elems.sort( (a, b) => a.id - b.id );

   list.innerHTML = "";

   for (let i = 0; i < elems.length; i++) {
      list.appendChild(elems[i]);
   }

});

document.getElementById("btn-active").addEventListener("click", function(e) {
   let completed_elems = document.querySelectorAll(".list-item.completed");
   for (let i = 0; i < completed_elems.length; i++) {
      completed_elems[i].setAttribute("style", "display: none");
   }

   let active_elems = document.querySelectorAll(".list-item.active");
   for (let i = 0; i < active_elems.length; i++) {
      active_elems[i].setAttribute("style", "display: flex");
   }
});

document.getElementById("btn-completed").addEventListener("click", function(e) {
   let active_elems = document.querySelectorAll(".list-item.active");
   for (let i = 0; i < active_elems.length; i++) {
      active_elems[i].setAttribute("style", "display: none");
   }

   let completed_elems = document.querySelectorAll(".list-item.completed");
   for (let i = 0; i < completed_elems.length; i++) {
      completed_elems[i].setAttribute("style", "display: flex");
   }
});

document.getElementById("res-btn-all").addEventListener("click", function(e) {
   let list = document.querySelector(".list");
   let active_elems = document.querySelectorAll(".list-item.active");
   let completed_elems = document.querySelectorAll(".list-item.completed");

   let elems = [];

   for (let i = 0; i < active_elems.length; i++) {
      elems.push(active_elems[i]);
      active_elems[i].setAttribute("style", "display: flex");
   }

   for (let i = 0; i < completed_elems.length; i++) {
      elems.push(completed_elems[i]);
      completed_elems[i].setAttribute("style", "display: flex");
   }

   elems = elems.sort( (a, b) => a.id - b.id );

   list.innerHTML = "";

   for (let i = 0; i < elems.length; i++) {
      list.appendChild(elems[i]);
   }

});

document.getElementById("res-btn-active").addEventListener("click", function(e) {
   let completed_elems = document.querySelectorAll(".list-item.completed");
   for (let i = 0; i < completed_elems.length; i++) {
      completed_elems[i].setAttribute("style", "display: none");
   }

   let active_elems = document.querySelectorAll(".list-item.active");
   for (let i = 0; i < active_elems.length; i++) {
      active_elems[i].setAttribute("style", "display: flex");
   }
});

document.getElementById("res-btn-completed").addEventListener("click", function(e) {
   let active_elems = document.querySelectorAll(".list-item.active");
   for (let i = 0; i < active_elems.length; i++) {
      active_elems[i].setAttribute("style", "display: none");
   }

   let completed_elems = document.querySelectorAll(".list-item.completed");
   for (let i = 0; i < completed_elems.length; i++) {
      completed_elems[i].setAttribute("style", "display: flex");
   }
});

document.querySelector(".footer-bot").addEventListener("click", function(e) {
   let completed_elems = document.querySelectorAll(".list-item.completed");

   for (let i = 0; i < completed_elems.length; i++) {
      completed_elems[i].remove();
   }
});

document.querySelector(".color-switch").addEventListener("click", function(e) {
   document.getElementById("body").setAttribute("style", "background: var(--clr-very-light-gray);");
   document.querySelector(".wrapper").setAttribute("style", "background: var(--clr-very-light-gray);");
   document.querySelector(".drag-order").setAttribute("style", "color: var(--clr-very-dark-blue);");
   document.querySelector(".responsive-footer").setAttribute("style", "background: var(--clr-very-dark);color: var(--clr-very-light-gray);");
});

let list = document.querySelector(".list");
let items = document.querySelectorAll(".list-item.active");

items.forEach(item => {
   item.addEventListener("dragstart", () => {
       // Adding dragging class to item after a delay
       setTimeout(() => item.classList.add("dragging"), 0);
   });
   // Removing dragging class from item on dragend event
   item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initlist = (e) => {
   e.preventDefault();
   const draggingItem = document.querySelector(".dragging");
   // Getting all items except currently dragging and making array of them
   let siblings = [...list.querySelectorAll(".item:not(.dragging)")];
   // Finding the sibling after which the dragging item should be placed
   let nextSibling = siblings.find(sibling => {
       return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
   });
   // Inserting the dragging item before the found sibling
   list.insertBefore(draggingItem, nextSibling);
}


list.addEventListener("dragover", initlist);
list.addEventListener("dragenter", e => e.preventDefault());
