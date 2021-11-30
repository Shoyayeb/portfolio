
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />

        <Switch>

          <Route exact path="/">
            <Banner />
            <Skills />
          </Route>

          <Route path="/home">
            <Banner />
            <Skills />
          </Route>
          <Route path="/portfolio">
            <Banner />
            <Skills />
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
