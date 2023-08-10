import Background from "../../Assets/Video/background.mp4";

const Loading = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="fixed">
                <video
                    src={Background}
                    autoPlay
                    muted
                    loop
                    className="w-full"
                ></video>
            </div>
        </div>
    );
};

export default Loading;
