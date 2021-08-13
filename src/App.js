import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components import
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages import
import HomePage from "./pages/HomePage";
import VotingPage from "./pages/VotingPage";
import VoteConfirmed from "./pages/VoteConfirmed";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* <Route path="/offers" exact component={OffersPage} /> */}
            <Route path="/vote" exact component={VotingPage} />
            <Route path="/voteconfirmed" exact component={VoteConfirmed} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
