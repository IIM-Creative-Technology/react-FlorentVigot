import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../Sass/components/_quizzHome.scss';

const QuizzCard = (props) => {
    const Quizz = props.infoData.map((data, index) => {
        return (
            <Link to={data.title}>
                <div key={index} className="home__card">
                    <div className="home__card-image">
                        <img src={data.image} alt={data.title} />
                    </div>
                    <h2>{data.title}</h2>
                </div>
            </Link>
        );
    });
    return <>{Quizz}</>
}

const QuizzHome = (props) => {
    const { infoData } = props;
    return (
        <Router>
            <div className="home__quizz">
                <QuizzCard infoData={infoData} />


                <Switch>
                    <Route path="/Quizz1">
                        <Quizz1 />
                    </Route>
                    <Route path="/Quizz2">
                        <Quizz2 />
                    </Route>
                    <Route path="/Quizz3">
                        <Quizz3 />
                    </Route>
                    <Route path="/Quizz4">
                        <Quizz4 />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Quizz1() {
    return;
}

function Quizz2() {
    return;
}

function Quizz3() {
    return;
}

function Quizz4() {
    return "Quizz4";
}

export default QuizzHome



