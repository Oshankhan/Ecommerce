import { useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route extact path="/" Component={Home} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
