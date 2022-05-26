import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Projects from './Components/projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />

        <Switch>

          <Route exact path="/">
            <Banner />
            <Skills />
            <Projects />
            <Contact />
          </Route>

          <Route path="/home">
            <Banner />
            <Skills />
            <Projects />
            <Contact />

          </Route>
          <Route path="/portfolio">
            <Banner />
            <Skills />
            <Projects />
            <Contact />

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
