import logo from './logo.svg';
import Sidebar from './components/Sidebar'
import ContentWrapper from './components/ContentWrapper'
import css from './assets/css/app.css';
import darthVader from './assets/images/darth-vader.jpg'
import mandalorian from './assets/images/mandalorian.jpg'
import jordanWalke from './assets/images/jordan-walke.png'

import stormTrooper from './assets/images/stormtrooper.jpg'



function App() {
  return (
    
    <div className="App">
      <Sidebar />
      <ContentWrapper />
    </div>
  );
}

export default App;
