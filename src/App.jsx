import { useState } from "react";
import "./App.css";

import Home from "./components/home/Home";
import Services from "./components/home/services/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main">
      <Home />
      <Services />
    </main>
  );
}

export default App;
