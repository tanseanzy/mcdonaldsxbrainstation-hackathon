import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components import
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages import
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* <Route path="offers" exact component={OffersPage} /> */}
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
