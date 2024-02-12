let num = Math.random() * 100;
num = (Math.floor(num));

let api = `https://api.adviceslip.com/advice/${num}`;

async function fetchAsync (api) {
   let initialData = fetch(api)
   .then(res => res.json())
   .then(data => {
       const adviceObj = data.slip; 
       document.getElementById("advice").innerHTML = adviceObj.id;
       document.getElementById("text").innerHTML = adviceObj.advice;
   });
}

fetchAsync(api);

document.querySelector(".dice").addEventListener("click", function(e) {
   let num = Math.random() * 100;
   num = (Math.floor(num));

   let api = `https://api.adviceslip.com/advice/${num}`;
   fetchAsync(api);
})


