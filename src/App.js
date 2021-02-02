import Header from './Components/Header'
import HeaderNav from './Data/Header.json'
import Intro from './Components/Intro'
import Quizz from './Components/QuizzHome'
import QuizzHome from './Data/QuizzHome.json'
import Caesura from './Components/Caesura'
import Footer from './Components/Footer'
import FooterNav from './Data/Footer.json'

function App() {

  return (
    <div className="App">
      <Header infoData={HeaderNav.data} />

      <Intro
        title="Titre"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dui iaculis, volutpat dolor a, sagittis mi. Praesent sit amet massa nec purus bibendum tincidunt at quis magna. Phasellus maximus vehicula mauris at pellentesque. Nunc et lectus iaculis, feugiat risus quis, euismod odio. Integer commodo tristique diam. Praesent ut arcu ac urna consectetur hendrerit. Duis ex mauris, commodo id sapien id, sagittis aliquet diam. Quisque vitae suscipit nunc, sed efficitur leo. Sed vel auctor lectus. Morbi vel blandit ante, at semper sapien. Cras viverra risus nunc, ac viverra massa malesuada ut. Nullam pulvinar accumsan sem, vel volutpat est lacinia ut. Donec hendrerit maximus arcu. Maecenas sit amet orci vitae lectus ultricies tincidunt in vel neque. Suspendisse dolor urna, consequat ut ipsum nec, fringilla venenatis enim. In hendrerit risus ornare, consequat ante a, molestie ipsum."
        link="Read"
        label="Voir"
      />

      <Quizz infoData={QuizzHome.data} />

      <Caesura
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dui iaculis, volutpat dolor a, sagittis mi. Praesent sit amet massa nec purus bibendum tincidunt at quis magna. Phasellus maximus vehicula mauris at pellentesque. Nunc et lectus iaculis, feugiat risus quis, euismod odio. Integer commodo tristique diam. Praesent ut arcu ac urna consectetur hendrerit. Duis ex mauris, commodo id sapien id, sagittis aliquet diam. Quisque vitae suscipit nunc, sed efficitur leo. Sed vel auctor lectus. Morbi vel blandit ante, at semper sapien. Cras viverra risus nunc, ac viverra massa malesuada ut. Nullam pulvinar accumsan sem, vel volutpat est lacinia ut. Donec hendrerit maximus arcu. Maecenas sit amet orci vitae lectus ultricies tincidunt in vel neque. Suspendisse dolor urna, consequat ut ipsum nec, fringilla venenatis enim. In hendrerit risus ornare, consequat ante a, molestie ipsum.

        Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sollicitudin varius purus a finibus. Nulla ut eros convallis, sodales ex non, venenatis tortor. Curabitur dignissim venenatis justo a vestibulum. Ut laoreet urna sit amet molestie sodales. Nunc fringilla euismod odio, non interdum dolor faucibus nec. Integer dictum fringilla sapien semper pellentesque. Cras eget arcu quis eros blandit varius ut a ex. Phasellus quis elit tincidunt, luctus nunc efficitur, ullamcorper neque. Aenean posuere dapibus vulputate."
      />

      <Footer infoData={FooterNav.data} />
    </div>
  );
}

export default App;
