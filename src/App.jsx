import { useState } from "react";
import "./App.css";

import Home from "./components/home/Home";
import Services from "./components/home/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Testimonials from "./components/testimonials/Testimonials";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main">
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Pricing />
      <Blog />
    </main>
  );
}

export default App;
