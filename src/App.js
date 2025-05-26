import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className="page">
      <SideMenu />
      <div id="main-body">
        <Router>
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
