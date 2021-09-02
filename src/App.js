import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component.jsx";
import theme from "./Theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route
            exact
            path="/customsoftwares"
            component={() => <div>Custom Software</div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>Mobile Apps</div>}
          />
          <Route exact path="/websites" component={() => <div>WebSites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>Revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
