import React from "react";
import Home from './components/home'
import FormScreen from "./components/formscreen";
import Confirmation from "./components/confirmation";
import { Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/pizza" component={ FormScreen }/>
      <Route exact path="/confirmation" component={ Confirmation }/>

      
    </>
  );
};
export default App;

