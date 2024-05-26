import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ProfileDrop = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function getStringBeforeSpace(str) {
    // Find the index of the first space character
    const spaceIndex = str.indexOf(' ');

    // If spaceIndex is -1, meaning there's no space in the string, return the whole string
    if (spaceIndex === -1) {
        return str;
    }

    // Otherwise, return the substring before the first space
    return str.substring(0, spaceIndex);
}

  return (
   
      <div onClick={toggleDropdown} className={`relative border-b-4 w-52 border-transparent py-3 ${isOpen ? 'border-amber-500 transform duration-300' : ''}`} >
        <div className="flex justify-center items-center space-x-3 cursor-pointer">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
            <img src={props.imgSrc} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="font-semibold text-gray-900 text-lg">
            <div className="cursor-pointer">Hi {getStringBeforeSpace(props.name)}</div>
          </div>
        </div>
        {isOpen && (
          <div className="absolute w-60  px-5 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-4">
            <ul>
              <li className="font-medium">
                <NavLink to="/user"> <a href='/user' className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-amber-700">
                  <div className="mr-3 text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  </div>
                  Account
                </a></NavLink>
                {/* <NavLink to="/addresturant">Add Your Resturant</NavLink> */}

               
              </li>
              <li className="font-medium">
              <NavLink to="/setting">
                <a href="/setting" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-amber-700">
                  <div className="mr-3 text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  Setting
                </a>
                </NavLink>

               
              </li>

              <li className="font-medium">
              <NavLink to="/addresturant" className="hover:text-amber-500">               
                  Add Your Resturant
                
                </NavLink>

               
              </li>

              <hr className="dark:border-gray-700" />
              <li className="font-medium">
                <a href="#" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600">
                  <div className="mr-3 text-red-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                  </div>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

  );
};

export default ProfileDrop;
