import { Link } from "react-router-dom";
import React from 'react';


const id = i

// La fonction crée une copie d'une session de quiz
handleClick = () => {
    const newquiz = this.state.newquiz.slice();
    newquiz.push({ id })
    this.setState({ quiz2: newquiz })

    const Quiz2 = ({ question, propositions, réponse }) => {
        const Post = question.infodata.map((data, index) => {
            return (<div>
                <h1>Questions : {question}</h1>
                <p>propositions{propositions}</p>
                <p>réponses: {réponse}</p>
                {/* On appelle notre fonction handleclick */}
                <button onClick={this.handleClick}>Question suivante</button>

                <Link to="/quiz2">Lien vers card</Link>
            </div>)
        })
        return Post
    }

};
export default Quiz2
