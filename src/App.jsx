import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main">
      <Home />
    </main>
  );
}

export default App;
