import Intro from '../Components/Home/Intro'
import Quiz from '../Components/Home/QuizHome'
import QuizHome from '../Data/QuizHome.json'
import Caesura from '../Components/Home/Caesura'
import Meteo from '../Components/Home/Meteo'

function Home() {

    return (
        <div className="Home">
            <Intro
                title="Les quiz marins"
                desc="Voici 4 quizs autours du domaine de la mer. Testez vos 		connaissances et apprenez-en toujours plus. Infos bonus sur les océans : Un océan est souvent défini, en géographie, comme une vaste étendue d'eau salée comprise entre deux continents. En fait, il s'agit plutôt d'un volume, dont l'eau est en permanence brassée par des courants marins. Approximativement 70,8 % de la surface de la Terre est recouverte par l'Océan mondial, communément divisé en cinq océans — Pacifique, Atlantique, Arctique, Austral, Indien — et en plusieurs dizaines de mers. Avec une profondeur moyenne de 3 682 mètres, les océans représentent 96 % du volume biosphérique. "
                link="quiz2"
                label="Voir"
            />

            <Quiz infoData={QuizHome.data} />

            <Meteo />

            <Caesura
                desc=" L'océan mondial, qui abrite la majorité des espèces vivantes sur Terre (50 à 80 % selon les estimations), génère plus de 60 % des services écosystémiques qui nous permettent de vivre, à commencer par la production de la majeure partie de l'oxygène que nous respirons. Il absorbe environ 30 % des émissions de CO2 générées par l'humanité, ce qui provoque son acidification6. L'océan Mondial régule à plus de 80 % le climat de la Terre. Il joue un rôle majeur dans la température terrestre."
            />
        </div >
    );
}

export default Home;
