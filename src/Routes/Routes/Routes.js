import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Singup from "../../Pages/Singup/Singup";
// import Dashbord from "../../Pages/Dashbord/Dashbord/Dashbord"
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppoitnment from "../../Pages/Dashbord/MyAppoitnment";
import Alluser from "../../Pages/Dashbord/AllUser/Alluser";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctor from "../../Pages/Dashbord/AddDoctor/AddDoctor";
import ManageDoctor from "../../Pages/Dashbord/ManageDoctor";
import About from "../../Pages/Home/About/About";
import ForDoctorBook from "../../Pages/ForDoctorBook/ForDoctorBook";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <Singup></Singup>
            },
            {
                path: '/appoinment',
                element: <Appoinment></Appoinment>
            },
            {
                path: '/about',
                element: <About></About>
            },
            // {
            //     path: '/doctorappoinment',
            //     element: <ForDoctorBook></ForDoctorBook>
            // }
        ]
    },
    {
        path: '/dashbord',
        element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        children: [
            {
                path: '/dashbord',
                element: <MyAppoitnment></MyAppoitnment>
            },
            {
                path: '/dashbord/users',
                element: <AdminRoute><Alluser></Alluser></AdminRoute>
            },
            {
                path: '/dashbord/adddoctor',
                element: <AdminRoute> <AddDoctor></AddDoctor> </AdminRoute>
            },
            {
                path: '/dashbord/managedoctors',
                element: <AdminRoute> <ManageDoctor></ManageDoctor> </AdminRoute>
            }
        ]
    }
]);
export default router;