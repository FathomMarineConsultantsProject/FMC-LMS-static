import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isDropDown, setIsDropDown] = useState(false);

    const toggleDropDown = () => {
        setIsDropDown(!isDropDown);
    };

    return (
        <div className='flex justify-between items-center p-4 bg-white border-b border-gray-100 sticky top-0 z-20'>
            
            {/* 1. Logo Section */}
            <div className='flex items-center'>
                <Link to="/" className='flex items-baseline group'>
                    <h3 className='text-sm mr-2 text-gray-500 font-medium group-hover:text-[#0071B2] transition-colors'>Welcome to </h3>
                    {/* Using the primary Blue from your palette */}
                    <h1 className='text-2xl font-extrabold text-[#0071B2] tracking-tight'>LMS</h1>
                </Link>
            </div>

            {/* 2. Middle Section: Search Bar */}
            <div className='relative w-full max-w-md hidden md:block'>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input 
                    className='w-full border border-gray-200 rounded-xl p-2.5 pl-10 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] transition-all duration-200 bg-gray-50 hover:bg-white' 
                    type='text' 
                    placeholder='Search for courses, articles, and more...'
                />
            </div>

            {/* 3. Right Section: Profile Dropdown */}
            <div className='relative'>
                {/* Profile Toggle Button */}
                <div 
                    onClick={toggleDropDown} 
                    className={`flex items-center cursor-pointer p-1.5 pr-3 rounded-full border border-transparent hover:bg-gray-50 hover:border-gray-100 transition-all duration-200 ${isDropDown ? 'bg-gray-50 border-gray-100' : ''}`}
                >
                    <img src='https://placehold.co/40x40/0071B2/FFFFFF?text=JD' 
                        alt='Profile'
                        className='w-9 h-9 rounded-full border-2 border-white shadow-sm'
                    />
                    <span className='hidden md:block text-sm font-semibold text-gray-700 ml-3 mr-2'>Tracy Gao Wen</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isDropDown ? 'rotate-180' : ''}`} />
                </div>

                {/* Dropdown Menu */}
                {isDropDown && (
                    <>
                        {/* Invisible backdrop to close dropdown on outside click */}
                        <div className="fixed inset-0 z-10" onClick={() => setIsDropDown(false)}></div>
                        
                        {/* The Menu */}
                        <div className='absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 z-20 overflow-hidden py-1 animation-fade-in-down'>
                            <div className="px-4 py-3 border-b border-gray-50">
                                <p className="text-sm text-gray-900 font-bold">Tracy Gao Wen</p>
                                <p className="text-xs text-gray-500 truncate">tracyGaoWen@example.com</p>
                            </div>
                            
                            <ul className="py-1">
                                <li>
                                    <Link 
                                        to="/profile" 
                                        className='block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-[#E0F7FA] hover:text-[#0071B2] transition-colors font-medium' 
                                        onClick={() => setIsDropDown(false)}
                                    >
                                        My Profile
                                    </Link>
                                </li>
                            
                                <li className='border-t border-gray-50 mt-1 pt-1'>
                                    <Link 
                                        to="/logout" 
                                        // Using Pink (#FF0055) for Sign Out to match Navbar
                                        className='block w-full text-left px-4 py-2.5 text-sm text-[#FF0055] font-bold hover:bg-[#FFF0F5] transition-colors' 
                                        onClick={() => setIsDropDown(false)}
                                    >
                                        Sign Out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header;