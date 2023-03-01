import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.log(e))
    }

    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={2} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/appoinment">APPOINMENT</Link></li>
                            <li><Link to="/">REVIEWS</Link></li>
                            <li><Link to="/">ABOUT</Link></li>
                            <li><Link to="/">LOGIN</Link></li>
                        </ul>
                    </div>
                    <Link to='*' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-semibold">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/appoinment">APPOINMENT</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/reviews">REVIEWS</Link></li>
                        {user?.uid ?
                            <>
                                <li><Link to="/dashbord">Dashbord</Link></li>
                                <li><button onClick={handleLogOut}>SING OUT</button></li>
                            </>
                            :
                            <li><Link to="/login">LOGIN</Link></li>
                        }
                    </ul>
                </div>
                <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;