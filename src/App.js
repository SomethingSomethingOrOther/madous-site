import './App.css';
import Navbar from './components.js/Navbar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components.js/Home'
import ContactMe from "./components.js/ContactMe"
import About from "./components.js/About"

function App() {
  return (
    <Router>

    <div className="App">
      <header className="App-header">
            <Navbar />
             </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </main>
    </div>
    </Router>
  );
}

export default App;
