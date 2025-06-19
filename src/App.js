import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CommingSoon from "./pages/commingSoon";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<CommingSoon />} />
        </Routes>
    </Router>
  );
}

export default App;
