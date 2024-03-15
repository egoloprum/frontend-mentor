import './style/footer.css';
import image1 from '../assets/icon-facebook.svg';
import image2 from '../assets/icon-twitter.svg';
import image3 from '../assets/icon-pinterest.svg';
import image4 from '../assets/icon-instagram.svg';

export default function () {
   return (
      <div class='footer'>
         <h1>loopstudios</h1>
         <p class='footer-elems'>
            <span>About</span>
            <span>Careers</span>
            <span>Events</span>
            <span>Products</span>
            <span>Support</span>
         </p>
         <p class='footer-logos'>
            <img src={ image1 } alt="" />
            <img src={ image2 } alt="" />
            <img src={ image3 } alt="" />
            <img src={ image4 } alt="" />
         </p>
         <p>© 2021 Loopstudios. All rights reserved.</p>
      </div>
   )
}

