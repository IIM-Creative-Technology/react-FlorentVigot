import Header from './Components/Header';
import HeaderNav from './Data/Header.json'

function App() {

  return (
    <div className="App">
      <Header infoData={HeaderNav.data}/>
    </div>
  );
}

export default App;
