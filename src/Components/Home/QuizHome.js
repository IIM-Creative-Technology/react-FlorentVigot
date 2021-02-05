import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../Sass/components/_quizHome.scss';

const QuizCard = (props) => {
    const Quiz = props.infoData.map((data, index) => {
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
    return <>{Quiz}</>
}

const QuizHome = (props) => {
    const { infoData } = props;
    return (
        <Router>
            <div className="home__quiz">
                <QuizCard infoData={infoData} />


                <Switch>
                    <Route path="/Quiz1">
                        <Quiz1 />
                    </Route>
                    <Route path="/Quiz2">
                        <Quiz2 />
                    </Route>
                    <Route path="/Quiz3">
                        <Quiz3 />
                    </Route>
                    <Route path="/Quiz4">
                        <Quiz4 />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Quiz1() {
    return;
}

function Quiz2() {
    return;
}

function Quiz3() {
    return;
}

function Quiz4() {
    return "Quiz4";
}

export default QuizHome



