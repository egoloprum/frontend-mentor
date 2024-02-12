let products = document.getElementsByClassName("product");

for (let i = 0; i < products.length; i++) {
   products[i].addEventListener("click", function(e) {
      document.querySelector(".product-js").setAttribute("style", "display: block");
      document.querySelector(".big").setAttribute("src", `images/image-product-${ ++i }.jpg`);
      document.querySelector(".product-js").id = "show";
   });
}

let products_big = document.getElementsByClassName("product-js-thumb");

for(let i = 0; i < products_big.length; i++) {
   products_big[i].addEventListener("click", function(e) {
      let id = products_big[i].id.replace(/^\D+/g, '');
      document.querySelector(".big").setAttribute("src", `images/image-product-${ id }.jpg`);
   });
}

let prev_btn = document.querySelector(".previous");
let next_btn = document.querySelector(".next");

prev_btn.addEventListener("click", function(e) {
   let id = document.querySelector(".big").getAttribute("src").replace(/^\D+/g, '')[0];
   if (id == 4) {
      id = 1;
   }
   else {
      id++;
   }
   document.querySelector(".big").setAttribute("src", `images/image-product-${ id }.jpg`);
});

next_btn.addEventListener("click", function(e) {
   let id = document.querySelector(".big").getAttribute("src").replace(/^\D+/g, '')[0];
   if (id == 4) {
      id = 1;
   }
   else {
      id++;
   }
   document.querySelector(".big").setAttribute("src", `images/image-product-${ id }.jpg`);
});

let hero_prev = document.querySelector(".hero-previous");
let hero_next = document.querySelector(".hero-next");

hero_prev.addEventListener("click", function(e) {
   let id = document.querySelector(".hero-big").getAttribute("src").replace(/^\D+/g, '')[0];
   if (id == 4) {
      id = 1;
   }
   else {
      id++;
   }
   document.querySelector(".hero-big").setAttribute("src", `images/image-product-${ id }.jpg`);
});

hero_next.addEventListener("click", function(e) {
   let id = document.querySelector(".hero-big").getAttribute("src").replace(/^\D+/g, '')[0];
   if (id == 4) {
      id = 1;
   }
   else {
      id++;
   }
   document.querySelector(".hero-big").setAttribute("src", `images/image-product-${ id }.jpg`);
});

let close_btn = document.getElementById("close");

close_btn.addEventListener("click", function(e) {
   document.querySelector(".product-js").id = "hide";
   document.querySelector(".product-js").setAttribute("style", "display: none");
});

let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let count = document.getElementById("cart-count");

minus.addEventListener("click", function(e) {
   if ( Number(count.innerHTML) == 0 ) {

   }
   else {
      let num = Number(count.innerHTML);
      count.innerHTML = --num;
   }
});

plus.addEventListener("click", function(e) {
   let num = Number(count.innerHTML);
   count.innerHTML = ++num;
});

let add_btn = document.getElementById("add-btn");
add_btn.addEventListener("click", function(e) {
   let num = document.getElementById("cart-count").innerHTML;
   document.querySelector(".nav-cart-count").innerHTML = num;
});

let cart_btn = document.querySelector(".nav-cart");
cart_btn.addEventListener("click", function(e) {
   let cart_count = document.querySelector(".nav-cart-count").innerHTML;
   if (cart_count != 0) {
      document.querySelector(".dropdown-inside-1").setAttribute("style", "display: none");
      document.querySelector(".dropdown-inside-2").setAttribute("style", "display: flex");

      document.querySelector(".dropdown-count").innerHTML = cart_count;
      document.querySelector(".dropdown-sum").innerHTML = `$${cart_count * 125}`;
   }
   else {
      document.querySelector(".dropdown-inside-1").setAttribute("style", "display: flex");
      document.querySelector(".dropdown-inside-2").setAttribute("style", "display: none !important");
   }

   if (cart_btn.id == 'hide') {
      document.querySelector(".nav-dropdown").setAttribute("style", "display: block");
      cart_btn.id = 'show';
   }
   else {
      document.querySelector(".nav-dropdown").setAttribute("style", "display: none");
      cart_btn.id = 'hide';
   }
});

let delete_btn = document.querySelector(".dropdown-delete");
delete_btn.addEventListener("click", function(e) {
   document.querySelector(".nav-cart-count").innerHTML = 0;
   document.querySelector(".dropdown-inside-1").setAttribute("style", "display: flex");
   document.querySelector(".dropdown-inside-2").setAttribute("style", "display: none !important");
});

let menu_btn = document.getElementById("icon-menu");
menu_btn.addEventListener("click", function(e) {
   document.querySelector(".sidebar").setAttribute("style", "display: block");
});

let sidebar_close = document.querySelector(".sidebar-close");
sidebar_close.addEventListener("click", function(e) {
   document.querySelector(".sidebar").setAttribute("style", "display: none");
});
