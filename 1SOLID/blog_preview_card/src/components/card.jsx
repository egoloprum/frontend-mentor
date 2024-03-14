import article from '../assets/illustration-article.svg'
import avatar from '../assets/image-avatar.webp'

import './card.css'

export default function Card() {
   return (
      <div class="card">
         <img class="background" src={ article } alt="" />
         <button><span>Learning</span></button>

         <p class="published">Published 21 Dec 2023</p>
         <h2>HTML & CSS foundations</h2>
         <p class="sentence">These languages are the backbone of every website, defining structure, content, and presentation.</p>

         <div class="bottom">
            <img src={ avatar } alt="" />
            <span>Greg Hooper</span>
         </div>
      </div>
   );
}
