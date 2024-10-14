import React from 'react';
import { Home, Calendar, BookOpen, Award, MessageSquare, Share2, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 min-h-screen p-4 border-r border-gray-200">
      <h1 className="text-2xl font-bold mb-8">NewUK</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-2 text-blue-600 bg-blue-100 px-4 py-2 rounded-md">
              <Home size={20} />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
              <Calendar size={20} />
              <span>Events</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
              <BookOpen size={20} />
              <span>Courses</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
              <Award size={20} />
              <span>Leaderboard</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-4">COMMUNITY</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
              <MessageSquare size={20} />
              <span>Ask the Community</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
              <Share2 size={20} />
              <span>Share & Learn</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
              <HelpCircle size={20} />
              <span>Help Center</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;