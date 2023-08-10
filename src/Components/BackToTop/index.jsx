import { useEffect, useState } from "react";

const BackTop = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        if (window.scrollY > 500) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleShow);
        return () => window.removeEventListener("scroll", handleShow);
    }, []);

    return (
        <div
            className={`${
                show ? "block" : "hidden"
            } group hover:bg-red-800 transition-colors duration-75 cursor-pointer fixed z-[1000] bottom-[30px] right-[30px] w-[50px] h-[50px] bg-red-500 rounded-md flex justify-center items-center shadow-2xl shadow-black border`}
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 font-extrabold group-hover:-translate-y-1 transition-all duration-100"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
            </svg>
        </div>
    );
};

export default BackTop;
