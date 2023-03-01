import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Dashbord from '../Pages/Dashbord/Dashbord/Dashbord';
import Navbar from '../Pages/Shared/NavBar/Navbar'


const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li> <Link to="/dashbord">My Appoinment</Link></li>
                        {
                            isAdmin && <>
                                <li> <Link to="/dashbord/users">All User</Link></li>
                            </>
                        }
                        {/* <li> <Link to="/dashbord/users">All User</Link></li> */}
                    </ul>

                </div>
                <Dashbord></Dashbord>
            </div>
        </div>
    );
};

export default DashboardLayout;