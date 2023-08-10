import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Page404 = () => {
    const [count, setCount] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        let time = setTimeout(() => {
            setCount((prev) => prev - 1);
        }, 1000);

        const navigateHome = () => {
            if (count === 0) {
                clearInterval(time);
                navigate("/");
            }
        };
        navigateHome();

        return () => clearTimeout(time);
    }, [count]);

    return (
        <>
            <div className="not-found w-full">
                <img
                    src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
                    alt="not-found"
                    className="w-full"
                />
                <div className="flex justify-center items-center text-blue-600 p-5">
                    <Link to="/">
                        <span className="hover:underline">Go Home</span>
                    </Link>
                </div>
                <div className="flex justify-center items-center text-red-600">
                    <h3>
                        Bạn sẽ được chuyển về trang chủ sau: {count} giây nữa
                    </h3>
                </div>
            </div>
        </>
    );
};

export default Page404;
