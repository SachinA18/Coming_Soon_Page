import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import About from "./pages/about";
import CommingSoon from "./pages/commingSoon";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Nav from "./component/navBar";

function App() {
  return (
    <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<CommingSoon />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
