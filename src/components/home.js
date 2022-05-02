import React, { useState } from "react";
import { useHistory } from "react-router-dom";



const HomeScreen = () => {
  
const navigate = useHistory()
    return (
      <>
        <h1>Hello World 3</h1>
        <button onClick={() => {
          navigate.push('/pizza')
        }} id="order-pizza">Order Pizza!</button>
      </>
    );
  };
  export default HomeScreen;