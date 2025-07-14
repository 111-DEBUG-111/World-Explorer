import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail.jsx';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<CountryDetail />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
