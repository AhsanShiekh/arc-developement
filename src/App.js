import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component.jsx";
import theme from "./Theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import CustomSoftwaresPage from "./components/CustomSoftwaresPage/CustomSoftwaresPage";
import WebsitePage from "./components/WebsitePage/WebsitePage";
import MobileAppsPage from "./components/MobileAppsPage/MobileAppsPage";

function App() {
  const [activeTab, setactiveTab] = useState(0);
  const [activeService, setActiveService] = useState(undefined);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar
          activeTab={activeTab}
          setactiveTab={setactiveTab}
          activeService={activeService}
          setActiveService={setActiveService}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route
            exact
            path="/customsoftwares"
            component={CustomSoftwaresPage}
          />
          <Route exact path="/mobileapps" component={MobileAppsPage} />
          <Route exact path="/websites" component={WebsitePage} />
          <Route
            exact
            path="/revolution"
            component={() => <div>Revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer
          activeTab={activeTab}
          setactiveTab={setactiveTab}
          activeService={activeService}
          setActiveService={setActiveService}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
