import Appbar from "./Appbar";
import Home from "./Home";
import IssueDetails from "./IssueDetails";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Appbar></Appbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="issues/:id">
              <IssueDetails></IssueDetails>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
