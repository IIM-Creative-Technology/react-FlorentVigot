import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../Sass/components/_footer.scss';

const Nav = (props) => {
    const Item = props.infoData.map((data,index) => {
         return (
             <div>
                 <li>
                    <Link to={data.title}>
                        {data.title}
                    </Link>
                </li>
             </div>
            
         );
    });
    return <ul>{Item}</ul>
}

const Footer = (props) => {
    const {infoData} = props;
    return(
        <Router>
            <footer>
                <div className="footer__wrapper">
                    <Nav infoData={infoData}/>
                </div>
            </footer>

            <Switch>
                    <Route path="/">
                        <Link1/>
                    </Route>
                    <Route path="/">
                        <Link2/>
                    </Route>
                    <Route path="/">
                        <Link3/>
                    </Route>
                </Switch>
        </Router>
    )
}

function Link1() {
    return "";
}

function Link2() {
    return "";
}

function Link3() {
    return "";
}

export default Footer;