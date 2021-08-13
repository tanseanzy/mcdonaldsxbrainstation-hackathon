import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components import
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages import
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage/OfferPage";
import PersonalOfferPage from "./pages/PersonalizedOfferPage/POPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Offers" exact component={OfferPage} />
            <Route path="/PersonalOffers" exact component={PersonalOfferPage} />
          </Switch>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
