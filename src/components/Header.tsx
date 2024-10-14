import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, LogIn, LogOut, UserCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/app" className="text-gray-800 hover:text-primary-600">Home</Link></li>
          <li><Link to="/app/events" className="text-gray-800 hover:text-primary-600">Events</Link></li>
          <li><Link to="/app/courses" className="text-gray-800 hover:text-primary-600">Courses</Link></li>
          <li><Link to="/app/leaderboard" className="text-gray-800 hover:text-primary-600">Leaderboard</Link></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        {user ? (
          <>
            <Link to="/app/profile" className="flex items-center space-x-2 text-gray-800 hover:text-primary-600">
              <UserCircle size={20} />
              <span>{user.displayName}</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
            >
              <LogOut size={20} />
              <span>Log out</span>
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
            >
              <LogIn size={20} />
              <span>Log in</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center space-x-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              <span>Register</span>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;