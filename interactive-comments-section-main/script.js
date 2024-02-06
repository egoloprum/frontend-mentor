let database = {
   "currentUser": {
      "image": { 
         "png": "./images/avatars/image-juliusomo.png",
         "webp": "./images/avatars/image-juliusomo.webp"
       },
       "username": "juliusomo"
   },

   "comments": [
      {
         "id": 1,
         "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
         "createdAt": "1 month ago",
         "score": 12,
         "user": {
               "image": { 
                  "png": "./images/avatars/image-amyrobson.png",
                  "webp": "./images/avatars/image-amyrobson.webp"
               },
               "username": "amyrobson"
         },
         "replies": []
      },
      {
         "id": 2,
         "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
         "createdAt": "2 weeks ago",
         "score": 5,
         "user" : {
            "image": { 
               "png": "./images/avatars/image-maxblagun.png",
               "webp": "./images/avatars/image-maxblagun.webp"
            },
            "username": "maxblagun"
         },

         "replies": [
           {
            "id": 3,
            "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            "createdAt": "1 week ago",
            "score": 4,
            "replyingTo": "maxblagun",
            "user": {
               "image": { 
                  "png": "./images/avatars/image-ramsesmiron.png",
                  "webp": "./images/avatars/image-ramsesmiron.webp"
               },
               "username": "ramsesmiron"
            }
           },

           {
            "id": 4,
            "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            "createdAt": "2 days ago",
            "score": 2,
            "replyingTo": "ramsesmiron",
            "user": {
               "image": { 
                  "png": "./images/avatars/image-juliusomo.png",
                  "webp": "./images/avatars/image-juliusomo.webp"
               },
               "username": "juliusomo"
            }
           }
         ]
       }
   ]
}

if (!JSON.parse(localStorage.getItem("database"))) {
   localStorage.setItem("database", JSON.stringify(database));
   console.log(false);
}
else {
   console.log(true);
}

database = JSON.parse(localStorage.getItem("database"));

// populating comments
for (let i = 0; i < database.comments.length; i++) {
   let comment_space = document.createElement("div");
   comment_space.className = "comment-space";
   comment_space.id = `comment-${ database.comments[i].id }`;
   
   let comment_div = document.createElement("div");
   comment_div.className = "comment";
   if (database.currentUser.username == database.comments[i].user.username) {
      comment_div.innerHTML = 
      `
         <div class="upvote">
            <span id="comment-upvote-plus-${ database.comments[i].id }" onclick="upvote_plus(this.id)"><img src="images/icon-plus.svg" alt=""></span>
            <span id="comment-upvote-count-${ database.comments[i].id }">${ database.comments[i].score }</span>
            <span id="comment-upvote-minus-${ database.comments[i].id }" onclick="upvote_minus(this.id)"><img src="images/icon-minus.svg" alt=""></span>
         </div>
         <div class="comment-body">
            <div class="comment-top">
               <span class="left">
                  <span><img src="${ database.comments[i].user.image.png }" alt=""></span>
                  <span>
                     <span class="username">${database.comments[i].user.username}</span>
                     <span class="created-at">${ database.comments[i].createdAt }</span>
                  </span>
               </span>
               <span class="right currentUser">
                  <span><img src="images/icon-delete.svg"><span id="comment-delete-btn-${ database.comments[i].id }" onclick="delete_btn(this.id)" class="delete-btn">delete</span>
                  </span>
                  <span><img src="images/icon-edit.svg"><span id="comment-edit-btn-${ database.comments[i].id }" onclick="edit_btn(this.id)" class="edit-btn">edit</span></span>
               </span>
            </div>
            <div class="content"><span></span><span>${ database.comments[i].content }</span></div>
         </div>
      `;
   }
   else {
      comment_div.innerHTML = 
      `
         <div class="upvote">
            <span id="comment-upvote-plus-${ database.comments[i].id }" onclick="upvote_plus(this.id)"><img src="images/icon-plus.svg" alt=""></span>
            <span id="comment-upvote-count-${ database.comments[i].id }">${ database.comments[i].score }</span>
            <span id="comment-upvote-minus-${ database.comments[i].id }" onclick="upvote_minus(this.id)"><img src="images/icon-minus.svg" alt=""></span>
         </div>
         <div class="comment-body">
            <div class="comment-top">
               <span class="left">
                  <span><img src="${ database.comments[i].user.image.png }" alt=""></span>
                  <span>
                     <span class="username">${database.comments[i].user.username}</span>
                     <span class="created-at">${ database.comments[i].createdAt }</span>
                  </span>
               </span>
               <span class="right"><img src="images/icon-reply.svg" alt=""><span id="comment-reply-btn-${ database.comments[i].id }" onclick="reply_btn(this.id)" class="reply-btn">Reply</span></span>
            </div>
            <div class="content"><span></span><span>${ database.comments[i].content }</span></div>
         </div>
      `;
   }

   comment_space.append(comment_div);

   for (let j = 0; j < database.comments[i].replies.length; j++) {
      reply_space = document.createElement("div");
      reply_space.className = "reply-space";
      reply_space.id = `reply-${ database.comments[i].replies[j].id }`;

      let reply_div = document.createElement("div");
      reply_div.className = "comment reply";
      if (database.currentUser.username == database.comments[i].replies[j].user.username) {
         reply_div.innerHTML = 
         `
            <div class="upvote">
               <span id="reply-upvote-plus-${ database.comments[i].replies[j].id }" onclick="upvote_plus(this.id)"><img src="images/icon-plus.svg" alt=""></span>
               <span id="reply-upvote-count-${ database.comments[i].replies[j].id }">${ database.comments[i].replies[j].score }</span>
               <span id="reply-upvote-minus-${ database.comments[i].replies[j].id }" onclick="upvote_minus(this.id)"><img src="images/icon-minus.svg" alt=""></span>
            </div>
            <div class="comment-body">
               <div class="comment-top">
                  <span class="left">
                     <span><img src="${ database.comments[i].replies[j].user.image.png }" alt=""></span>
                     <span>
                        <span class="username">${ database.comments[i].replies[j].user.username }</span>
                        <span class="created-at">${ database.comments[i].replies[j].createdAt }</span>        
                     </span>
                  </span>
                  <span class="right currentUser">
                     <span><img src="images/icon-delete.svg"><span id="reply-delete-btn-${ database.comments[i].replies[j].id }" onclick="delete_btn(this.id)" class="delete-btn">delete</span></span>
                     <span><img src="images/icon-edit.svg"><span id="reply-edit-btn-${ database.comments[i].replies[j].id }" onclick="edit_btn(this.id)" class="edit-btn">edit</span></span>
                  </span>
               </div>
               <div class="content"><span>@${ database.comments[i].replies[j].replyingTo }</span> <span>${ database.comments[i].replies[j].content }</span></div>
            </div>
         `;
      }
      else {
         reply_div.innerHTML = 
         `
            <div class="upvote">
               <span id="reply-upvote-plus-${ database.comments[i].replies[j].id }" onclick="upvote_plus(this.id)"><img src="images/icon-plus.svg" alt=""></span>
               <span id="reply-upvote-count-${ database.comments[i].replies[j].id }">${ database.comments[i].replies[j].score }</span>
               <span id="reply-upvote-minus-${ database.comments[i].replies[j].id }" onclick="upvote_minus(this.id)"><img src="images/icon-minus.svg" alt=""></span>
            </div>
            <div class="comment-body">
               <div class="comment-top">
                  <span class="left">
                     <span><img src="${ database.comments[i].replies[j].user.image.png }" alt=""></span>
                     <span>
                        <span class="username">${ database.comments[i].replies[j].user.username }</span>
                        <span class="created-at">${ database.comments[i].replies[j].createdAt }</span>        
                     </span>
                  </span>
                  <span class="right" id="replyingTo-${ database.comments[i].replies[j].replyingTo }"><img src="images/icon-reply.svg" alt=""><span id="reply-reply-btn-${ database.comments[i].replies[j].id }" onclick="reply_btn(this.id)" class="reply-btn">Reply</span></span>
               </div>
               <div class="content"><span>@${ database.comments[i].replies[j].replyingTo }</span> <span>${ database.comments[i].replies[j].content }</span></div>
            </div>
         `;
      }

      reply_space.append(reply_div);
      comment_space.append(reply_space);
   }

   document.getElementById("comment-reply-space").append(comment_space);
}

// user reply part
if (document.getElementsByClassName("user-reply")[0] == undefined) {
   let user_reply_div = document.createElement("div");
   user_reply_div.className = "user-reply";
   user_reply_div.innerHTML = `
                              <span><img src="${ database.currentUser.image.png }" alt=""></span>
                              <span><textarea name="" id="user-reply" placeholder="add a comment"></textarea></span>
                              <span><button class="send-btn" id="send-btn" onclick="send_btn()">send</button></span>
   `;
   
   document.getElementById("main").append(user_reply_div);
}

// add a comment
function send_btn() {
   let txt = document.getElementById("user-reply").value;
   document.getElementById("user-reply").value = "";

   let array_of_index = [];

   for (let i = 0; i < database.comments.length; i++) {
      array_of_index.push(database.comments[i].id);
      for (let j = 0; j < database.comments[i].replies.length; j++) {
         array_of_index.push(database.comments[i].replies[j].id);
      }
   }

   let new_comment_id = Math.max(...array_of_index) + 1;

   let new_comment = {
      "id": new_comment_id,
      "content": txt,
      "createdAt": "just now",
      "score": 0,
      "user": {
            "image": { 
               "png": database.currentUser.image.png,
               "webp": database.currentUser.image.webp
            },
            "username": database.currentUser.username
      },
      "replies": []
   }

   database.comments.push(new_comment);
   localStorage.setItem("database", JSON.stringify(database));

   let comment_space = document.createElement("div");
   comment_space.className = "comment-space";
   comment_space.id = `comment-${ new_comment_id }`;
   
   let comment_div = document.createElement("div");
   comment_div.className = "comment";
   comment_div.innerHTML = 
   `
      <div class="upvote">
         <span id="comment-upvote-plus-${ new_comment_id }" onclick="upvote_plus(this.id)"><img src="images/icon-plus.svg" alt=""></span>
         <span id="comment-upvote-count-${ new_comment_id }">0</span>
         <span id="comment-upvote-minus-${ new_comment_id }" onclick="upvote_minus(this.id)"><img src="images/icon-minus.svg" alt=""></span>
      </div>
      <div class="comment-body">
         <div class="comment-top">
            <span class="left">
               <span><img src="${ database.currentUser.image.png }" alt=""></span>
               <span>
                  <span class="username">${database.currentUser.username}</span>
                  <span class="created-at">just now</span>
               </span>
            </span>
            <span class="right currentUser">
               <span><img src="images/icon-delete.svg" alt=""><span class="delete-btn" onclick="delete_btn(this.id)" id="comment-delete-btn-${ new_comment_id }">delete</span></span>
               <span><img src="images/icon-edit.svg" alt=""><span class="edit-btn" onclick="edit_btn(this.id)" id="comment-edit-btn-${ new_comment_id }">edit</span></span>
            </span>
         </div>
         <div class="content"><span></span> <span>${ txt }</span></div>
      </div>
   `;

   comment_space.append(comment_div);
   document.getElementById("comment-reply-space").appendChild(comment_space);
}

// delete comment or reply
function delete_btn(id) {
   let btn_id = id.split("-");

   if (btn_id[0] == 'reply') {
      btn_id = btn_id[btn_id.length - 1];
      document.getElementById(`reply-${btn_id}`).remove();

      for (let i = 0; i < database.comments.length; i++) {
         let index = database.comments[i].replies.indexOf( database.comments[i].replies.filter(item => item.id == btn_id)[0]);

         if (index > -1) {
            database.comments[i].replies.splice(index, 1);
         }
      }
      localStorage.setItem("database", JSON.stringify(database));
   }
   else {
      btn_id = btn_id[btn_id.length - 1];
      document.getElementById(`comment-${btn_id}`).remove();
      
      let index = database.comments.indexOf(database.comments.filter(item => item.id == btn_id)[0]);

      if (index > -1) {
         database.comments.splice(index, 1);
         localStorage.setItem("database", JSON.stringify(database));
      }
   }
}

// edit comment or reply
function edit_btn(id) {
   let type_of_reply = id.split("-")[0];
   let id_of_reply = id.split("-")[3];

   if (type_of_reply == "comment") {
      let space = document.getElementById(`comment-${ id_of_reply }`);
      let content = space.children[0].children[1].children[1].children[1];
      let content_value = content.innerHTML;
      space.children[0].children[1].children[1].children[0].setAttribute("style", "display: none;");
      content.innerHTML = `<textarea id="${type_of_reply}-edit-textarea-${ id_of_reply }" placeholder="edit a reply">${content_value}</textarea><button id="${ type_of_reply }-edit-update-${ id_of_reply }" onclick="update_btn(this.id)">update</button>`;
   }
   else {
      let space = document.getElementById(`reply-${ id_of_reply }`);
      let content = space.children[0].children[1].children[1].children[1];
      let content_value = content.innerHTML;
      space.children[0].children[1].children[1].children[0].setAttribute("style", "display: none;");
      content.innerHTML = `<textarea id="${type_of_reply}-edit-textarea-${ id_of_reply }" placeholder="edit a reply">${content_value}</textarea><button id="${ type_of_reply }-edit-update-${ id_of_reply }" onclick="update_btn(this.id)">update</button>`;
   }
}

function update_btn(id) {
   let type_of_reply = id.split("-")[0];
   let id_of_reply = id.split("-")[3];

   if (type_of_reply == "comment") {
      let space = document.getElementById(`comment-${ id_of_reply }`);
      let content = space.children[0].children[1].children[1].children[1];
      space.children[0].children[1].children[1].children[0].setAttribute("style", "display: block;");
      let content_value = document.getElementById(`${ type_of_reply }-edit-textarea-${ id_of_reply }`).value;

      let index = database.comments.indexOf(database.comments.filter(item => item.id == id_of_reply)[0]);
      database.comments[index].content = content_value;
      localStorage.setItem("database", JSON.stringify(database));

      content.innerHTML = content_value;
   }
   else {
      let space = document.getElementById(`reply-${ id_of_reply }`);
      let content = space.children[0].children[1].children[1].children[1];
      space.children[0].children[1].children[1].children[0].setAttribute("style", "display: block;");
      let content_value = document.getElementById(`${ type_of_reply }-edit-textarea-${ id_of_reply }`).value;

      let index = -1;

      for (let i = 0; i < database.comments.length; i++) {
         index = database.comments[i].replies.indexOf(database.comments[i].replies.filter(item => item.id == id_of_reply)[0]);

         if (index > -1) {
            database.comments[i].replies[index].content = content_value;
            localStorage.setItem("database", JSON.stringify(database));
            break;
         }
      }
      content.innerHTML = content_value;
   }
}

// reply comment or reply
function reply_btn(id) {
   let type_of_reply = id.split("-")[0];
   let id_of_reply = id.split("-")[3];

   let reply_div = document.createElement("div");
   reply_div.className = "user-reply";
   reply_div.id = `user-reply-${ id_of_reply }`;
   reply_div.innerHTML = 
   `
      <span><img src="${ database.currentUser.image.png }" alt=""></span>
      <span><textarea name="" id="${ type_of_reply }-reply-textarea-${ id_of_reply }" placeholder="add a reply"></textarea></span>
      <span><button class="reply-btn" id="${ type_of_reply }-reply-send_btn-${ id_of_reply }" onclick="reply_send_btn(this.id)">reply</button></span>
   `;

   if (type_of_reply == "comment") {
      document.getElementById(`comment-${ id_of_reply }`).append(reply_div);
   }
   else {
      document.getElementById(`reply-${ id_of_reply }`).append(reply_div);
   }
}

// reply send button
function reply_send_btn(id) {
   let type_of_reply = id.split("-")[0];
   let id_of_reply = id.split("-")[3];

   let reply_send_textarea = document.getElementById(`${type_of_reply}-reply-textarea-${ id_of_reply }`).value;

   let array_of_index = [];

   for (let i = 0; i < database.comments.length; i++) {
      array_of_index.push(database.comments[i].id);
      for (let j = 0; j < database.comments[i].replies.length; j++) {
         array_of_index.push(database.comments[i].replies[j].id);
      }
   }

   let new_reply_id = Math.max(...array_of_index) + 1;

   let replied_to_username = ""; 

   if (type_of_reply == "comment") {
      let index = database.comments.indexOf(database.comments.filter(item => item.id == id_of_reply)[0]);
      replied_to_username = database.comments[index].user.username;

      let new_reply = {  
         "id": new_reply_id,
         "content": "",
         "createdAt": "just now",
         "score": 0,
         "replyingTo": replied_to_username,
         "user": {
            "image": { 
               "png": "./images/avatars/image-juliusomo.png",
               "webp": "./images/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
         }
      }

      database.comments[index].replies.push(new_reply);
      localStorage.setItem("database", JSON.stringify(database));
   }
   else {
      replied_to_username = "";
      let index = -1;
      let comment_index = -1;

      for (let i = 0; i < database.comments.length; i++) {
         index = database.comments[i].replies.indexOf(database.comments[i].replies.filter(item => item.id == id_of_reply)[0]);
         if (index > -1) {
            replied_to_username = database.comments[i].replies[index].user.username;
            comment_index = i;
            break;
         }
      }

      let new_reply = {  
         "id": new_reply_id,
         "content": "",
         "createdAt": "just now",
         "score": 0,
         "replyingTo": replied_to_username,
         "user": {
            "image": { 
               "png": "./images/avatars/image-juliusomo.png",
               "webp": "./images/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
         }
      }

      database.comments[comment_index].replies.push(new_reply);
      localStorage.setItem("database", JSON.stringify(database));
   }

   let replied_to_space = document.getElementById(`${ type_of_reply }-${ id_of_reply }`);
   let reply_div = document.createElement("div");
   reply_div.className = "reply-space";
   reply_div.id = `reply-${ new_reply_id }`;
   reply_div.innerHTML = 
   `
   <div class="comment reply">
      <div class="upvote">
         <span id="upvote-plus-${ id_of_reply }" onclick="upvote_plus(this.id)"><img src="images/icon-plus.svg" alt=""></span>
         <span id="upvote-count-${ id_of_reply }">0</span>
         <span id="upvote-minus-${ id_of_reply }" onclick="upvote_minus(this.id)"><img src="images/icon-minus.svg" alt=""></span>
      </div>
      <div class="comment-body">
         <div class="comment-top">
            <span class="left">
               <img src="${ database.currentUser.image.png }" alt="">
               <span class="username">${ database.currentUser.username }</span>
               <span class="created-at">just now</span>
            </span>
            <span class="right currentUser">
               <span><img src="images/icon-delete.svg"><span id="reply-delete-btn-${ new_reply_id }" onclick="delete_btn(this.id)" class="delete-btn">delete</span></span>
               <span><img src="images/icon-edit.svg"><span id="reply-edit-btn-${ new_reply_id }" onclick="edit_btn(this.id)" class="edit-btn">edit</span></span>
            </span>
         </div>
         <div class="content">@${ replied_to_username } ${ reply_send_textarea }</div>
      </div>
   </div>
   `;

   document.getElementById(`user-reply-${ id_of_reply }`).remove();
   replied_to_space.appendChild(reply_div);
}


function upvote_plus(id) {
   let id_of_reply = id.split("-")[3];
   let type_of_reply = id.split("-")[0];

   let upvote_count = document.getElementById(`${type_of_reply}-upvote-count-${ id_of_reply }`);
   let count = parseInt(upvote_count.innerHTML);
   count++;
   upvote_count.innerHTML = count;

   if (type_of_reply == "comment") {
      let index = database.comments.indexOf(database.comments.filter(item => item.id == id_of_reply)[0]);

      if (index > -1) {
         database.comments[index].score = count;
         localStorage.setItem("database", JSON.stringify(database));
      }
   }
   else {
      for (let i = 0; i < database.comments.length; i++) {
         let index = database.comments[i].replies.indexOf(database.comments[i].replies.filter(item => item.id == id_of_reply)[0]);

         if (index > -1) {
            database.comments[i].replies[index].score = count;
            localStorage.setItem("database", JSON.stringify(database));
            break;
         }
      }
   }
}  

function upvote_minus(id) {
   let id_of_reply = id.split("-")[3];
   let type_of_reply = id.split("-")[0];

   let upvote_count = document.getElementById(`${type_of_reply}-upvote-count-${ id_of_reply }`);
   let count = parseInt(upvote_count.innerHTML);
   count--;
   upvote_count.innerHTML = count;

   if (type_of_reply == "comment") {
      let index = database.comments.indexOf(database.comments.filter(item => item.id == id_of_reply)[0]);

      if (index > -1) {
         database.comments[index].score = count;
         localStorage.setItem("database", JSON.stringify(database));
      }
   }
   else {
      for (let i = 0; i < database.comments.length; i++) {
         let index = database.comments[i].replies.indexOf(database.comments[i].replies.filter(item => item.id == id_of_reply)[0]);

         if (index > -1) {
            database.comments[i].replies[index].score = count;
            localStorage.setItem("database", JSON.stringify(database));
            break;
         }
      }
   }
}
