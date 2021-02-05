import Header from './Components/Header'
import HeaderNav from './Data/Header.json'
import Footer from './Components/Footer'
import FooterNav from './Data/Footer.json'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Import Pages

import Home from './Pages/Home'



function App() {

  return (
    <div className="App">
      <Header infoData={HeaderNav.data} />
      <Home />
      <Router />
      <Footer infoData={FooterNav.data} />
    </div >
  );
}



export default App;
