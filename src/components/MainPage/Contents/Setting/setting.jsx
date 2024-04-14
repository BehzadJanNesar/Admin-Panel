import React, { useState } from 'react'

export default function Setting() {
   const [isDarkMode, setIsDarkMode] = useState(false);

   const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
   };

   return (
      <button
         className={`bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded ${isDarkMode ? 'dark:bg-gray-800 dark:text-gray-200' : ''
            }`}
         onClick={toggleDarkMode}
      >
         {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
   );
}
