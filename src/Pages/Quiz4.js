import React from "react";
// import Score from "../Components/Hooks/Score";
import PageSuivante from "../Components/Hooks/PageSuivante"
import "../Sass/Quiz/_quiz.scss"

// const [postsuivant, setPostsuivant] = useState(0);

const Info = (props) => {
    // on map l'ensemble des données 
    const Post = props.infoData.map((data, index) => {
        return (
            <div className="Quiz2bodys">
                {/* <p>id {data.id}</p> */}

                <h3>Questions : {data.question}</h3>

                <label>
                    <input type="radio" name="q$n" value="0" ></input>
                    {/* <input type="radio" id="radio['.$i.']"  name="form['.$i.'][controle]"  value="OUI" */}
                    {/* <input type="radio" id="huey" name="drone" value="huey" */}
                    {/* checked> */}
                    <label for="">{data.propositions[0]}</label>
                    <input type="radio" name="q$n" value="1"></input>
                    <label>{data.propositions[1]}</label>
                    <input type="radio" name="q$n" value="2"></input>
                    <label>{data.propositions[2]}</label>
                    <input type="radio" name="q$n" value="3"></input>
                    <label>{data.propositions[3]}</label>
                </label>
                {/* <li></li> */}

                <p>réponses: {data.réponse}</p>
                {/* <input type="text" value={this.state.reponse} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <p>réponses: {data.réponse}</p> */}
                {/* On appelle notre fonction handleclick */}
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
