import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../Sass/components/_intro.scss';

const Introduction = ({ title, desc, link, label }) => {
    return (
        <Router>
            <div className="home__intro">
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="btn__wave">
                    <Link to={link} className="btn__wrapper">
                        <div className="btn__label">
                            {label}
                        </div>
                    </Link>
                </div>

                <Switch>
                    <Route path="/Read">
                        <Read />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Read() {
    return "Voir";
}

export default Introduction;