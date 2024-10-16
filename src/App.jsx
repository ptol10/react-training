import SearchParams from "./Components/SearchParams";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Components/Details";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
