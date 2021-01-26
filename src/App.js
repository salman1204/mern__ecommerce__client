import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/nav/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";

function App() {
  return (

  <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/" component={Login}/>
      <Route exact path="/" component={Register}/>
    </Switch>
  </Router> 

  )
}

export default App;
