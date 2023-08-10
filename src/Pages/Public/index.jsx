import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import Copyright from "../../Components/Copyright";

const PublicPage = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <Navigation />
            <div className="w-main mt-8">
                <Outlet />
            </div>
            <Footer />
            <Copyright />
        </div>
    );
};

export default PublicPage;
