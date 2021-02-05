import Intro from '../Components/Home/Intro'
import Quiz from '../Components/Home/QuizHome'
import QuizHome from '../Data/QuizHome.json'
import Caesura from '../Components/Home/Caesura'
import Meteo from '../Components/Home/Meteo'

function Home() {

    return (
        <div className="Home">
            <Intro
                title="Titre"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dui iaculis, volutpat dolor a, sagittis mi. Praesent sit amet massa nec purus bibendum tincidunt at quis magna. Phasellus maximus vehicula mauris at pellentesque. Nunc et lectus iaculis, feugiat risus quis, euismod odio. Integer commodo tristique diam. Praesent ut arcu ac urna consectetur hendrerit. Duis ex mauris, commodo id sapien id, sagittis aliquet diam. Quisque vitae suscipit nunc, sed efficitur leo. Sed vel auctor lectus. Morbi vel blandit ante, at semper sapien. Cras viverra risus nunc, ac viverra massa malesuada ut. Nullam pulvinar accumsan sem, vel volutpat est lacinia ut. Donec hendrerit maximus arcu. Maecenas sit amet orci vitae lectus ultricies tincidunt in vel neque. Suspendisse dolor urna, consequat ut ipsum nec, fringilla venenatis enim. In hendrerit risus ornare, consequat ante a, molestie ipsum."
                link="quiz2"
                label="Voir"
            />

            <Quiz infoData={QuizHome.data} />

            <Meteo/>

            <Caesura
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dui iaculis, volutpat dolor a, sagittis mi. Praesent sit amet massa nec purus bibendum tincidunt at quis magna. Phasellus maximus vehicula mauris at pellentesque. Nunc et lectus iaculis, feugiat risus quis, euismod odio. Integer commodo tristique diam. Praesent ut arcu ac urna consectetur hendrerit. Duis ex mauris, commodo id sapien id, sagittis aliquet diam. Quisque vitae suscipit nunc, sed efficitur leo. Sed vel auctor lectus. Morbi vel blandit ante, at semper sapien. Cras viverra risus nunc, ac viverra massa malesuada ut. Nullam pulvinar accumsan sem, vel volutpat est lacinia ut. Donec hendrerit maximus arcu. Maecenas sit amet orci vitae lectus ultricies tincidunt in vel neque. Suspendisse dolor urna, consequat ut ipsum nec, fringilla venenatis enim. In hendrerit risus ornare, consequat ante a, molestie ipsum.

        Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sollicitudin varius purus a finibus. Nulla ut eros convallis, sodales ex non, venenatis tortor. Curabitur dignissim venenatis justo a vestibulum. Ut laoreet urna sit amet molestie sodales. Nunc fringilla euismod odio, non interdum dolor faucibus nec. Integer dictum fringilla sapien semper pellentesque. Cras eget arcu quis eros blandit varius ut a ex. Phasellus quis elit tincidunt, luctus nunc efficitur, ullamcorper neque. Aenean posuere dapibus vulputate."
            />
        </div >
    );
}

export default Home;
