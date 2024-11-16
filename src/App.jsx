import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
export default App;
