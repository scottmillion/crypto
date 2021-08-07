import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllCoins from "pages/AllCoins"
import Coin from "pages/Coin"



class App extends React.Component {
  render(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Coins</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={AllCoins} />
          <Route exact path="/coin/:name" component={Coin} />
        </Switch>
      </div>
    </Router>
  );}
}



export default App;
