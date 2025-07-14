import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex items-center gap-4 p-4 bg-gray-100 shadow">
    <Link to="/" className="text-2xl font-bold mb-4">🌍 World Explorer</Link>
    <Link to="/favorites" className="text-2xl font-bold mb-4">⭐ Favorites</Link>
  </nav>
);

export default Navbar;
