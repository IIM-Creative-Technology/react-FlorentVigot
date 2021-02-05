import Header from './Components/Header'
import HeaderNav from './Data/Header.json'
import Footer from './Components/Footer'
import FooterNav from './Data/Footer.json'
import Routes from './Route/Router'
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";




      <Footer infoData={FooterNav.data}/>
    </div>
function App() {

  return (
    <div className="App">
       <Router>
        <Header infoData={HeaderNav.data} />
        <Footer infoData={FooterNav.data} />
        <Routes/>
      </Router>
    </div >
  );
}



export default App;
