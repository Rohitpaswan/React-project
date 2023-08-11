import { useState } from "react";

import "./App.css";

/* The following line can be included in your src/index.js or App.js file */

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";

import CardDetails from "./Components/CardDetails";
import Cards from "./Components/Cards";
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <>
      <Header />
<ContextProvider>

      <Routes>
        <Route path="/" element={<Cards />} />

        <Route path="/cart" element={<CardDetails />} />
      </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
