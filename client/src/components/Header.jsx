import React from 'react';
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between p-3 max-w-6xl mx-auto'>
    <Link to="/">
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
    <span className='text-slate-400'>Solo</span>
    <span className='text-slate-800'>Estate</span>  
    </h1>
    </Link>
    <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
    <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
    <FaSearch className='text-slate-600' />
    </form>

    <ul className='gap-4 flex'>
    <Link to="/"><li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li></Link>
    <Link to="/about"><li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li></Link>
    <Link to="/sign-in"><li className=' text-slate-700 hover:underline cursor-pointer'>Sign In</li></Link>
    </ul>
    </div>

    </header>
  )
}
