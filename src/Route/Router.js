import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Quiz1 from '../Pages/Quiz1'
import Quiz1Info from '../Data/Quiz/Quiz1.json'
import Quiz2 from '../Pages/Quiz2'
import Quiz2Info from '../Data/Quiz/Quiz2.json'
import Quiz3 from '../Pages/Quiz3'
import Quiz3Info from '../Data/Quiz/Quiz3.json'
import Quiz4 from '../Pages/Quiz4'
import Quiz4Info from '../Data/Quiz/Quiz4.json'
import NotFound from '../Pages/NotFound'
import Shrimp from '../Assets/shrimp.svg'

const Routeur = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/quiz1">
        <Quiz1 infoData={Quiz1Info.data} />
      </Route>
      <Route exact path="/quiz2">
        <Quiz2 infoData={Quiz2Info.data} />
      </Route>
      <Route exact path="/quiz3">
        <Quiz3 infoData={Quiz3Info.data} />
      </Route>
      <Route exact path="/quiz4">
        <Quiz4 infoData={Quiz4Info.data} />
      </Route>
      <Route path="*">
        <NotFound title="404 - Tu es perdu moussaillon" image404={Shrimp} alt="crevette" message="Tu cherches à t'évader, clique sur la vague dans le menu." />
      </Route>
    </Switch>
  </Router>
);
export default Routeur