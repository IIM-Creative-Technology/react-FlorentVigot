import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// const id = 1

// La fonction crée une copie d'une session de quiz
// const handleClick = () => {
//     // const newquiz = this.state.newquiz.slice();
//     // newquiz.push({ id })
//     // this.setState({ quiz2: newquiz })

//     const Quiz2 = (props) => {
//         const Post = props.infodata.map((data, index) => {
//             return (
//             <div>
//                 <h1>Questions : {data.question}</h1>
//                 <p>propositions{data.propositions}</p>
//                 <p>réponses: {data.réponse}</p>
//                 {/* On appelle notre fonction handleclick */}
//                 <button onClick={this.handleClick}>Question suivante</button>

//                 <Link to="/quiz2">Lien vers card</Link>
//             </div>)
//         })
//         return Post
//     }

//     return Quiz2

// }

const Info = (props) => {
    const Post = props.infoData.map((data, index) => {
        return (
        <div>
            <h1>Questions : {data.question}</h1>
            {/* <p>propositions{data.propositions}</p> */}
            <p>réponses: {data.réponse}</p>
            {/* On appelle notre fonction handleclick */}
            {/* <button onClick={this.handleClick}>Question suivante</button> */}
        </div>)
    });
    return <div>{Post}</div>
}


const Quiz2 = (props) => {
    const { infoData } = props;
    return (
        <div>
            <Info infoData={infoData}/>
        </div>
    )
}

export default Quiz2;
