import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)
    const [theme, setTheme] = useState("light");
      useEffect(() => {
        const localTheme = localStorage.getItem("theme");
    
        setTheme(localTheme);
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);

      
    const handleToggle = (e) => {
      if (e.target.checked) {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    };
    
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            console.log('out success')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const navlink=<>
    <NavLink to='/'  className={({isActive})=>isActive?'text-[#221D14]  font-bold mr-8 text-xl':'font-bold mr-8 text-xl'}>Home</NavLink>
    <NavLink to='/' className={({isActive})=>isActive?'text-[#221D14]  font-bold mr-8 text-xl':'font-bold mr-8 text-xl'}>All Art & craft Items</NavLink>
    <NavLink to='/add' className={({isActive})=>isActive?'text-[#221D14]  font-bold mr-8 text-xl':'font-bold mr-8 text-xl'}>Add Craft Item</NavLink>
    {
      user ? <NavLink to='/mycard' className={({isActive})=>isActive?'text-[#221D14]  font-bold mr-8 text-xl':'font-bold mr-8 text-xl'}>My Art&Craft List</NavLink>: <> <NavLink to='/login' className={({isActive})=>isActive?'text-[#221D14]  font-bold mr-8 text-xl':'font-bold mr-8 text-xl'}>Login</NavLink> <NavLink to='/register' className={({isActive})=>isActive?'text-[#221D14]  font-bold mr-8 text-xl':'font-bold mr-8 text-xl'}>Register</NavLink> </>
    }
 
    
    
    </>
   
      
      
    
  
    
    return (
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  w-52">
       {
        navlink
       }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={`https://i.ibb.co/thtnTPH/Ginevra-logo-black.png`} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6">
    {
        navlink
       }
    </ul>
  </div>
  <div>
  <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleToggle}
              checked={theme === "dark" ? true : false}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
  </div>
  <div className="navbar-end">
  <Tooltip id="my-tooltip" />
  {
    user &&  <div data-tooltip-id="my-tooltip"  data-tooltip-content={user.displayName} className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
      </div>
    </div>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    
      
      
        <button onClick={handleLogOut}>Log Out</button>
      
    </ul>
  </div>
  }
  </div>
</div>
    );
};

export default Navbar;