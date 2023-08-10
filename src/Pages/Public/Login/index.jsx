import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../../Components/LoginForm";
import { useSelector } from "react-redux";
import { StateAuthUser } from "../../../Redux/selector";
import { useEffect } from "react";

const LoginPage = () => {
    const auth = useSelector(StateAuthUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth) {
            navigate("/");
        }
    });

    return (
        <div className="max-w-[400px] mx-auto pt-[20px] flex flex-col gap-3 relative">
            <LoginForm />
            <Link
                to="/"
                className="hover:text-red-700 transition-colors duration-150 text-red-500"
            >
                <div className="flex justify-center items-center gap-2 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span>Về Trang Chủ</span>
                </div>
            </Link>
        </div>
    );
};

export default LoginPage;
