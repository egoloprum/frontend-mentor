import './style/list.css';
import desk_image1 from '../assets/desktop/image-deep-earth.jpg';
import desk_image2 from '../assets/desktop/image-night-arcade.jpg';
import desk_image3 from '../assets/desktop/image-soccer-team.jpg';
import desk_image4 from '../assets/desktop/image-grid.jpg';
import desk_image5 from '../assets/desktop/image-from-above.jpg';
import desk_image6 from '../assets/desktop/image-pocket-borealis.jpg';
import desk_image7 from '../assets/desktop/image-curiosity.jpg';
import desk_image8 from '../assets/desktop/image-fisheye.jpg';

import mob_image1 from '../assets/desktop/image-deep-earth.jpg';
import mob_image2 from '../assets/desktop/image-night-arcade.jpg';
import mob_image3 from '../assets/desktop/image-soccer-team.jpg';
import mob_image4 from '../assets/desktop/image-grid.jpg';
import mob_image5 from '../assets/desktop/image-from-above.jpg';
import mob_image6 from '../assets/desktop/image-pocket-borealis.jpg';
import mob_image7 from '../assets/desktop/image-curiosity.jpg';
import mob_image8 from '../assets/desktop/image-fisheye.jpg';

import { For, Index } from "solid-js";

export default function List () {

   let data = {
      elem : [
         {
            "desk_image" : desk_image1,
            "mob_image" : mob_image1,
            "body": "DEEP EARTH",
         },
         {
            "desk_image" : desk_image2,
            "mob_image" : mob_image2,
            "body": "NIGHT ARCADE",
         },
         {
            "desk_image" : desk_image3,
            "mob_image" : mob_image3,
            "body": "SOCCER TEAM VR",
         },
         {
            "desk_image" : desk_image4,
            "mob_image" : mob_image4,
            "body": "THE GRID",
         },
         {
            "desk_image" : desk_image5,
            "mob_image" : mob_image5,
            "body": "FROM UP ABOVE VR",
         },
         {
            "desk_image" : desk_image6,
            "mob_image" : mob_image6,
            "body": "POCKET BOREALIS",
         },
         {
            "desk_image" : desk_image7,
            "mob_image" : mob_image7,
            "body": "THE CURIOSITY",
         },
         {
            "desk_image" : desk_image8,
            "mob_image" : mob_image8,
            "body": "MAKE IT FISHEYE",
         }
      ]
   }

   return (
      <div class="list">
         <h1 class='list-title'>OUR CREATIONS</h1>
         <button class='list-btn'>SEE ALL</button>
         
         <For each={data.elem}>{(elem) =>
            <div class='list-elem'>
               <img class='list-desk-img' src={ elem.desk_image } alt="" />
               <img class='list-mob-img' src={ elem.mob_image } alt="" />
               <p>{ elem.body }</p>
            </div>
         }</For>
      </div>
   )
}
