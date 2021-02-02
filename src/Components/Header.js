import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../Sass/components/_header.scss';
import wave from '../Assets/wave.svg';

const Logo = ({ image, alt }) => {
    return (
        <img src={image} alt={alt} />
    )
}

const Nav = (props) => {
    const Item = props.infoData.map((data, index) => {
        return (
            <li>
                <Link to={data.title}>{data.title}</Link>
            </li>
        );
    });
    return <ul>{Item}</ul>
}

const Header = (props) => {
    const { infoData } = props;
    return (
        <Router>
            <header>
                <Logo image={wave} />
                <Nav infoData={infoData} />

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
            </header>
        </Router>
    )
}

function Quizz1() {
    return "Quizz1";
}

function Quizz2() {
    return "Quizz2";
}

function Quizz3() {
    return "Quizz3";
}

function Quizz4() {
    return "Quizz4";
}

export default Header;