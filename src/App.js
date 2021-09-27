import { React } from "react"
import { Route } from "react-router";
import { 
  BrowserRouter as Router
} from "react-router-dom"

import { ToDoDay } from "./components/ToDo"

function App() {
  return (
    <Router>
      <Route path="/">
        <ToDoDay></ToDoDay>
      </Route>
    </Router>
  );
}

export default App;
