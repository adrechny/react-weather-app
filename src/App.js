import "./App.css";

import SearchEngine from "./SearchEngine.js";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <Footer />
    </div>
  );
}
