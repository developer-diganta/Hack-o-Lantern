import './App.css';
import MainPage from './components/mainPage/mainPage.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Inside from './components/inside/inside';
import RoomOne from './components/rooms/roomone/Roomone';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/inside" component={Inside} />
        <Route exact path="/roomOne" component={RoomOne} />
      </Switch>
    </Router>
  );
}

export default App;
