import './App.css';
import MainPage from './components/mainPage/mainPage.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Inside from './components/inside/inside';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/inside" component={Inside} />
      </Switch>
    </Router>
  );
}

export default App;
