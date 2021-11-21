import React from "react";
import Footer from "./components/Footer/Footer";
import JumbotronContainer from "./components/Jumbotron";
import Faq from "./components/Faq/Faq";
import OptForm from "./components/Opt-form/OptForm";

function App() {
  return (
    <>
      <JumbotronContainer/>
      <Faq/>
      <OptForm/>
      <Footer/>
    </>
  );
}

export default App;
