import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Main = () => {
    return (
        <div className="px-8 md:px-28 py-8  ">
            <Navbar></Navbar>

            <Outlet></Outlet>
            <div className="mt-12 md:mt-48">
                    <Footer></Footer>

                </div>
        </div>
    );
};

export default Main;