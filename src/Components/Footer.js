import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import '../Sass/components/_footer.scss';

const Nav = (props) => {
    const Item = props.infoData.map((data, index) => {
        return (
            <div>
                <li>
                    {data.title}
                </li>
            </div>

        );
    });
    return <ul>{Item}</ul>
}

const Footer = (props) => {
    const { infoData } = props;
    return (
        <Router>
            <footer>
                <div className="footer__wrapper">
                    <Nav infoData={infoData} />
                </div>
            </footer>
        </Router>
    )
}



export default Footer;