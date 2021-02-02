import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../Sass/components/_header.scss';
import wave from '../Assets/wave.svg';

const Logo = ({image, alt}) => {
    return(
        <img src={image} alt={alt}/>
    )
}

const Nav = (props) => {
    const Item = props.infoData.map((data,index) => {
         return (
            <li>
                <Link to={data.title}>{data.title}</Link>
            </li>
         );
    });
    return <ul>{Item}</ul>
}

const Header = (props) => {
    const {infoData} = props;
    return(
        <Router>
            <header>
                <Logo image={wave}/>
                <Nav infoData={infoData}/>

                <Switch>
                    <Route path="/Quiz1">
                        <Quiz1/>
                    </Route>
                    <Route path="/Quiz2">
                        <Quiz2/>
                    </Route>
                    <Route path="/Quiz3">
                        <Quiz3/>
                    </Route>
                    <Route path="/Quiz4">
                        <Quiz4/>
                    </Route>
                </Switch>
            </header>
        </Router>
    )
}

function Quiz1() {
    return "Quiz1";
}

function Quiz2() {
    return "Quiz2";
}

function Quiz3() {
    return "Quiz3";
}

function Quiz4() {
    return "Quiz4";
}

export default Header;