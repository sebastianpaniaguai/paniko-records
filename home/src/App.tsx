import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { HomeContent } from "./Components/HomeContent";

import "./index.scss";

const App = () => {
  return (
    <div>
      <Header />
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
