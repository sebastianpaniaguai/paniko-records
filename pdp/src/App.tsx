import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./Components/PDPContent";

const App = () => (
  <Router>
    <Header />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Routes>
        <Route path="/records/:id" element={<PDPContent />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
