import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import CharacterForm from './components/CharacterForm';
import NotFound from './components/NotFound';
import './styles/App.css';

function App() {
  const appStyle = {
    backgroundImage: 'url(images/Marvel.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    position: 'relative',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  const containerStyle = {
    padding: '20px',
    minHeight: 'calc(100vh - 100px)',
  };

  return (
    <div style={appStyle}>
      {/* Decided not to go with overlay, kills the brightness too much */}
      <div style={contentStyle}>
        <Router>
          <Navbar />
          <div className="container mt-3" style={containerStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters" element={<CharacterList />} />
              <Route path="/characters/:id" element={<CharacterDetail />} />
              <Route path="/characters/new" element={<CharacterForm mode="create" />} />
              <Route path="/characters/:id/edit" element={<CharacterForm mode="edit" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;