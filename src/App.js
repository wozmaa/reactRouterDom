import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Features } from "./pages/Feauters/Features";
import { HomePage } from "./pages/homepage/HomePage";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <header className="header">
        <div className="headerText">
          <h2>Cover</h2>
        </div>
        <div className="headerLink">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </header>

      <body className="body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<Features />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </body>

      <footer className="footer">
        <p>
          Cover template for{" "}
          <a href="https://www.youtube.com/watch?v=1cTfHw9nJqY&t=2s">
            Bootstrap
          </a>
          , by <a href="https://www.youtube.com/watch?v=_B25plp4BkU">@mdo</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
