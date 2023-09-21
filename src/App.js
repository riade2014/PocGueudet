import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main";
import PhoneHeader from "./components/header/PhoneHeader";

function App() {
  return (
    <body>
      <div className="App">
        {/* <Header /> */}*
        <header>
          <PhoneHeader />
        </header>
        <div className="body">
          <Main />
        </div>
        {/* <Footer /> */}
      </div>
    </body>
  );
}

export default App;
