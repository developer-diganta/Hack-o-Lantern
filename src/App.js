import './App.css';
import MainPage from './components/mainPage/mainPage.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Inside from './components/inside/inside';
import RoomOne from './components/rooms/roomone/Roomone';
import Movie from './components/Movie/Movie';
import Planchet from './components/Planchet/Planchet';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/inside" component={Inside} />
        <Route exact path="/movie" component={Movie} />
        <Route exact path="/roomOne" component={RoomOne} />
        <Route exact path="/planchet" component={Planchet} />
      </Switch>
    </Router>
  );
}

export default App;
