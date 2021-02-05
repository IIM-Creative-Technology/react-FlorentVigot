import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";


import Quiz1 from "../Pages/Quiz1"
import Quiz2 from "../Pages/Quiz2"
import Quiz3 from "../Pages/Quiz3"
import Quiz4 from "../Pages/Quiz4"
import NotFound from "./NoMatch";

const Routeur = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz1" component={Quiz1} />
            <Route exact path="/quiz2" component={Quiz2} />
            <Route exact path="/quiz3" component={Quiz3} />
            <Route exact path="/quiz4" component={Quiz4} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
);
export default Routeur