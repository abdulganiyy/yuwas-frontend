import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menubar from "./components/Menubar/Menubar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Team from "./pages/Team/Team";
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <Router>
        <Menubar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/team" exact component={Team} />
          <Route path="/project" exact component={Project} />
          <Route path="/contact" exact component={Contact} />


        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
