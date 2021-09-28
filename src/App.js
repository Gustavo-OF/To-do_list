import { React } from "react"
import { Route } from "react-router";
import { 
  BrowserRouter as Router
} from "react-router-dom"

import { ToDo } from "./components/ToDo"

function App() {
  return (
    <Router>
      <Route path="/">
        <ToDo></ToDo>
      </Route>
    </Router>
  );
}

export default App;
