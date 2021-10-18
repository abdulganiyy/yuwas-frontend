import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menubar from "./components/Menubar/Menubar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Menubar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
