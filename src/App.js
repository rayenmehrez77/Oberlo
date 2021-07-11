import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";

const App = () => {
  return (
    <div
      className="lg:px-2 bg-gray-100"
      style={{
        backgroundImage: `url(${"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%237a797c' fill-opacity='0.25' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"})`,
      }}
    >
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
      <Footer />
      <MessengerCustomerChat pageId="108570531499735" appId="503342847441521" />
    </div>
  );
};

export default App;
