import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">

      <Router>
        <Header />

        <Switch>

          <Route exact path="/">
            <Banner />
          </Route>

          <Route path="/home">
            <Banner />
          </Route>
          <Route path="/portfolio">
            <Banner />
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
