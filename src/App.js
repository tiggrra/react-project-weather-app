import React from "react";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine defaultCity="Vienna" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
