import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../Sass/components/_header.scss';
import wave from '../Assets/wave.svg';
import Quiz2 from '../Pages//Quiz2'
import Quiz2Info from '../Data/Quiz/Quiz2.json'

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
            </header>
        </Router>
    )
}


export default Header;