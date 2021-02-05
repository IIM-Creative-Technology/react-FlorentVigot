import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Quiz2 from '../Pages/Quiz2'
import Quiz2Info from '../Data/Quiz/Quiz2.json'
import NotFound from '../Pages/NotFound'
import Shrimp from '../Assets/shrimp.svg'

const Routeur = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz2">
              <Quiz2 infoData={Quiz2Info.data}/>
            </Route>
            <Route path="*">
              <NotFound title="404 - Tu es perdu moussaillon" image404={Shrimp} alt="crevette" message="Tu cherches à t'évader, clique sur la vague dans le menu."/>
            </Route>
        </Switch>
    </Router>
);
export default Routeur