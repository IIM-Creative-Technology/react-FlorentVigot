import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../Sass/components/_header.scss';
import wave from '../Assets/wave.svg';
import Quiz2 from '../Pages//Quiz2'

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
                    {/* <Route path="/quiz1">
                        <Quiz1 />
                    </Route> */}
                    <Route path="/quiz2">
                        <Quiz2 />
                    </Route>
                    {/* <Route path="/quiz3">
                        <Quiz3 />
                    </Route>
                    <Route path="/quiz4">
                        <Quiz4 />
                    </Route> */}
                </Switch>
            </header>
        </Router>
    )
}



// function Quiz2() {
//     return (
//         <Router>
//             <Link to="/">Home</Link>
//             <Link to="/quiz2">quiz2</Link>
//             {/* <Link to="/quiz3">quiz3</Link>
//             <Link to="/quiz4">quiz4</Link> */}

//         </Router>
//     )
// }

// function Quiz3() {
//     return "Quiz3";
// }

// function Quiz4() {
//     return "Quiz4";
// }

export default Header;