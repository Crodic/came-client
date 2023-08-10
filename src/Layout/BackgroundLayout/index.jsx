import { Outlet } from "react-router-dom";
import BackgroundVideo from "../../Assets/Video/background.mp4";

const BackgroundLayout = () => {
    return (
        <div className="min-h-screen relative">
            <div className="fixed bottom-0 top-0 right-0 left-0 z-[-1000]">
                <video
                    src={BackgroundVideo}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                ></video>
            </div>
            <Outlet />
        </div>
    );
};

export default BackgroundLayout;
