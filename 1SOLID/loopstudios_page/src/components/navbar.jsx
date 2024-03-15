import nav_image_desktop from '../assets/desktop/image-hero.jpg';
import nav_image_mobile from '../assets/mobile/image-hero.jpg';
import nav_menu from '../assets/icon-hamburger.svg';

import './style/nav.css';

export default function Navbar () {
   return (
      <div class='navbar'>
         <img class='nav-desktop' src={ nav_image_desktop } alt="" />
         <img class='nav-mobile' src={ nav_image_mobile } alt="" />

         <div class='nav-elem'>
            <h1>loopstudios</h1>
            <img class='nav-menu' src={ nav_menu } alt="" />
            <p class='nav-menu-list'>
               <span>About</span>
               <span>Careers</span>
               <span>Events</span>
               <span>Products</span>
               <span>Support</span>
            </p>
         </div>

         <div className="nav-body">
            <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
         </div>

      </div>
   )
}
