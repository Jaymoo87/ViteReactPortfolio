import { useState } from "react";
import "./App.css";

import Home from "./components/home/Home";
import Services from "./components/home/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main">
      <Home />
      <Services />
      <Skills />
      <Portfolio />
    </main>
  );
}

export default App;
