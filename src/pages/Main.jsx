import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

 
const Main = () => {
    return (
        <div className="w-full">
           <div className="md:w-[1450px] mx-auto">
           <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Main;