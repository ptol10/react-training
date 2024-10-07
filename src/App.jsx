import SearchParams from "./Components/SearchParams";
import "./App.css";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Details from "./components/Details";
// import { useEffect, useState } from "react";

function App() {
  return (
    // <BrowserRouter>
    //   <header>
    //     <Link to="/">Adopt Me!</Link>
    //   </header>
    //   <Routes>
    //     <Route path="/" element={<SearchParams />} />
    //     <Route path="/details/:id" element={<Details />} />
    //   </Routes>
    // </BrowserRouter>

    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
    </div>
  );
}

export default App;
