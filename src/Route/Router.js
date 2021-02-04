import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Card from "../components/Card";
import QuizHome from "../Components/QuizHome";
import NotFound from "./NoMatch";

const Routeur = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={ } />
            <Route exact path="/quiz1" component={QuizHome} />
            <Route exact path="/quiz2" component={Card} />
            <Route exact path="/quiz3" component={Card} />
            <Route exact path="/quiz4" component={Card} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
);
export default Routeur