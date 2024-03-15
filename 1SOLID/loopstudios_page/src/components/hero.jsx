import './style/hero.css';
import hero_desktop from '../assets/desktop/image-interactive.jpg';
import hero_mobile from '../assets/mobile/image-interactive.jpg';

export default function Hero () {
   return (
      <div class='hero'>
         <img class='hero-desktop' src={ hero_desktop } alt="" />
         <img class='hero-mobile' src={ hero_mobile } alt="" />

         <div class="hero-body">
            <h1>THE LEADER IN INTERACTIVE VR</h1>
            <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
         </div>
      </div>
   )
}
