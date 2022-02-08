import { 
  BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css';
import Products from "./components/Products";

import QueryParams from './components/QueryParams';

function App() {

  return (
      <Router>
        <Switch>
          <Route exact path="/queryParse">
            <QueryParams/>
          </Route>
          <Route exact path="/products">
            <Products/>
          </Route>
          <Route exact path="/products/:id">
            <Products/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

