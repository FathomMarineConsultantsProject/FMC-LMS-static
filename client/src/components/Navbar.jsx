import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  Library,
  Monitor,
  ClipboardCheck,
  TrendingUp,
  FilePlus,
  AlertTriangle,
  Settings2,
  FolderOpen,
  Users,
  Medal,
  Bookmark,
  Award,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// --- Reusable NavItem Component ---
const NavItem = ({ to, icon: Icon, text, isOpen }) => {
  return (
    <li>
      <NavLink
        to={to}
        end
        className={({ isActive }) =>
          `flex items-center p-3 my-1.5 rounded-xl transition-all duration-200 group
            ${isOpen ? 'justify-start' : 'justify-center'}
            ${isActive
              ? 'bg-[#E0F7FA] text-[#0071B2] font-bold shadow-sm'
              : 'text-gray-500 hover:bg-gray-50 hover:text-[#0071B2]'}`
        }
      >
        <Icon className="w-6 h-6 flex-shrink-0 transition-colors duration-200" />
        <span
          className={`ml-3 whitespace-nowrap font-medium transition-all duration-200 origin-left
            ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 hidden'}`}
        >
          {text}
        </span>
      </NavLink>
    </li>
  );
};

// --- Main Navbar Component ---
const Navbar = () => {
  // Start with sidebar open
  const [isOpen, setIsOpen] = useState(true);

  const setToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`h-screen bg-white border-r border-gray-100 flex flex-col shadow-sm z-10
                  transition-all duration-300 ease-in-out
                  ${isOpen ? 'w-72' : 'w-24'}`}
    >

      {/* 1. Toggle Button */}
      <div className={`flex items-center p-6 border-b border-gray-50 ${isOpen ? 'justify-end' : 'justify-center'}`}>
        <button
          onClick={setToggle}
          className="p-2 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-[#0071B2] focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 transition-colors"
        >
          {isOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>
      </div>

      {/* 2. Main Navigation Links */}
      <div className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar">

        {/* Main section */}
        <div className="mb-8">
          <h3 className={`text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3 transition-opacity duration-200 ${!isOpen && 'text-center text-[10px]'}`}>
            {isOpen ? 'Main Menu' : 'Main'}
          </h3>
          <ul className="space-y-1">
            <NavItem to="/" icon={LayoutDashboard} text="Dashboard" isOpen={isOpen} />
            <NavItem to="/my-learning" icon={GraduationCap} text="My Learning" isOpen={isOpen} />
            <NavItem to="/courses" icon={Library} text="Courses" isOpen={isOpen} />
            <NavItem to="/immersive" icon={Monitor} text="Immersive Training" isOpen={isOpen} />
            <NavItem to="/assessments" icon={ClipboardCheck} text="Assessments" isOpen={isOpen} />
            <NavItem to="/progress" icon={TrendingUp} text="My Progress" isOpen={isOpen} />
          </ul>
        </div>

        {/* Creation section */}
        <div className="mb-8">
          <h3 className={`text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3 transition-opacity duration-200 ${!isOpen && 'text-center text-[10px]'}`}>
            {isOpen ? 'Create' : 'New'}
          </h3>
          <ul className="space-y-1">
            <NavItem to="/create-course" icon={FilePlus} text="Create Course" isOpen={isOpen} />
            <NavItem to="/incident" icon={AlertTriangle} text="Incidents" isOpen={isOpen} />
            <NavItem to="/training" icon={Settings2} text="Training Management" isOpen={isOpen} />
          </ul>
        </div>

        {/* Engagement */}
        <div className="mb-8">
          <h3 className={`text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3 transition-opacity duration-200 ${!isOpen && 'text-center text-[10px]'}`}>
            {isOpen ? 'Social' : 'Soc'}
          </h3>
          <ul className="space-y-1">
            <NavItem to="/resources" icon={FolderOpen} text="Resources" isOpen={isOpen} />
            <NavItem to="/community" icon={Users} text="Community" isOpen={isOpen} />
            <NavItem to="/leaderboard" icon={Medal} text="Leaderboard" isOpen={isOpen} />
          </ul>
        </div>

        {/* Personal section */}
        <div className="mb-8">
          <h3 className={`text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3 transition-opacity duration-200 ${!isOpen && 'text-center text-[10px]'}`}>
            {isOpen ? 'Personal' : 'Me'}
          </h3>
          <ul className="space-y-1">
            <NavItem to="/bookmarks" icon={Bookmark} text="Bookmarks" isOpen={isOpen} />
            <NavItem to="/certification" icon={Award} text="Certification" isOpen={isOpen} />
          </ul>
        </div>
      </div>

      {/* 3. Sign Out Link */}
      <div className="p-4 border-t border-gray-100 mx-2">
        <NavLink
          to="/logout"
          className={`flex items-center p-3 rounded-xl text-[#FF0055] font-bold hover:bg-[#FFF0F5] transition-colors duration-200
                      ${isOpen ? 'justify-start' : 'justify-center'}`}
        >
          <LogOut className="w-6 h-6 flex-shrink-0" />
          <span className={`ml-3 whitespace-nowrap transition-all duration-200 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 hidden'}`}>
            Sign Out
          </span>
        </NavLink>
      </div>

    </nav>
  );
};

export default Navbar;
