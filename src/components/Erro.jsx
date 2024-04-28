import React from 'react';
import { Link } from 'react-router-dom';

const Erro = () => {
    return (
        <div className='w-1/2 mx-auto py-12 md:py-48 '>
            <img src={`https://i.ibb.co/F5cy3st/how-to-fix-error-404-1.webp`} alt="" />


      <div className='w1/2 mt-6 ml-12 '>
      <Link to='/' className="relative inline-flex mx-auto items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
<span className="relative">Go To Home</span>
</Link>
      </div>
            
        </div>
    );
};

export default Erro;