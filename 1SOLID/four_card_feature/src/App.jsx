import './style.css';
import Top from './components/top.jsx';
import Card from './components/card.jsx';

import image1 from './assets/icon-supervisor.svg';
import image2 from './assets/icon-team-builder.svg';
import image3 from './assets/icon-karma.svg';
import image4 from './assets/icon-calculator.svg';

function App() {

  let val = {
    data : [
      {
      "class": "card border-teal",
      "title": "Supervisor",
      "body": "Monitors activity to identify project roadblocks",
      "image": image1
      },
      {
        "class": "card border-red",
        "title": "Team Builder",
        "body": "Scans our talent network to create the optimal team for your project",
        "image": image2 
      },
      {
        "class": "card border-yellow",
        "title": "Karma",
        "body": "Regularly evaluates our talent to ensure quality",
        "image": image3
      },
      {
        "class": "card border-blue",
        "title": "Calculator",
        "body": "Uses data from past projects to provide better delivery estimates",
        "image": image4
      }
    ]
  }

  return (
    <>
      <Top />

      <div class='wrapper'>
        <div class="layout-grid">
          <div class="col">
            <Card data={val.data[0]} />
          </div>
          <div class="col">
            <Card data={val.data[1]} />
            <Card data={val.data[2]} />
          </div>
          <div class="col">
            <Card data={val.data[3]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
