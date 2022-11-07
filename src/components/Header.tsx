import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [selected, setSelected] = useState<string>('about');
  return (
    <nav className='bg-white'>
      <div className='p-3 container flex flex-wrap justify-between items-center mx-auto'>
        <span className='ml-3 text-black self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
          Aaron Feldman
        </span>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='text-black inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a
                href='#'
                className={`block py-2 pr-4 pl-3 ${
                  selected === 'about' ? 'text-blue-700' : 'text-black'
                }  rounded md:bg-transparent md:p-0`}
                onClick={() => setSelected('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className={`block py-2 pr-4 pl-3 ${
                  selected === 'knowledge' ? 'text-blue-700' : 'text-black'
                }  rounded md:bg-transparent md:p-0`}
                onClick={() => setSelected('knowledge')}
              >
                Knowledge
              </a>
            </li>
            <li>
              <a
                href='#'
                className={`block py-2 pr-4 pl-3 ${
                  selected === 'services' ? 'text-blue-700' : 'text-black'
                }  rounded md:bg-transparent md:p-0`}
                onClick={() => setSelected('services')}
              >
                Proyects
              </a>
            </li>
            <li>
              <a
                href='#'
                className={`block py-2 pr-4 pl-3 ${
                  selected === 'contact' ? 'text-blue-700' : 'text-black'
                }  rounded md:bg-transparent md:p-0`}
                onClick={() => setSelected('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
