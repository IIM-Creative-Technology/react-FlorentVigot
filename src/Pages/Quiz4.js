import React from "react";
// import Score from "../Components/Hooks/Score";
import PageSuivante from "../Components/Hooks/PageSuivante"
import "../Sass/Quiz/_quiz.scss"


const Info = (props) => {
    // on map l'ensemble des données 
    const Post = props.infoData.map((data, index) => {
        return (
            <div >
                <h3>Questions : {data.question}</h3>
                {data.propositions.map((propositions, i) => (

                    <label className="propositions" key={i}>
                        <input type="radio" name="q$n" value="0" />
                        {propositions}
                    </label>
                ))}
                <p>réponses: {data.réponse}</p>
            </div>)
    });
    return <div>{Post}</div>
}



const Quiz4 = (props) => {
    const { infoData } = props;
    return (
        <div className="Quizbody">
            <h1>Bienvenue sur Quiz4 </h1>
            <h2>Thème Météo </h2>
            <Info infoData={infoData} />
            <PageSuivante />
            {/* <Score /> */}

        </div >
    )
}

export default Quiz4;
