import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path='/'>
        <NavBar/>
        <Home/>
        <Skills/>
        <Projects/>
        </Route>
        <Route exact path='/portfolio'>
        <NavBar/>
        <Portfolio/>
        </Route>
        <Route exact path='/about'>
        <NavBar/>
        <About/>
        </Route>
        <Route exact path='/blog'>
        <NavBar/>
        <Blog/>
        </Route>
        <Route exact path='/resume'>
        <NavBar/>
        <Resume/>
        </Route>
      </Switch>
    </Router>
    
      </div>
  );
}

export default App;
