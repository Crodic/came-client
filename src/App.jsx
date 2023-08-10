import { useEffect } from "react";
import BackTop from "./Components/BackToTop";
import ConfigRoute from "./Routes/routes";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
    const { pathname } = useLocation();
    useEffect(() => {
        if (window.scrollY > 400) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [pathname]);
    return (
        <>
            <div className="font-poppins min-w-[1240px] relative">
                <ConfigRoute />
                <BackTop />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
