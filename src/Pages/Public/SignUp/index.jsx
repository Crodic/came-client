import { Link } from "react-router-dom";
import SignUpForm from "../../../Components/SignUpForm";

const SignUp = () => {
    return (
        <div className="max-w-[450px] pt-[20px] mx-auto flex flex-col gap-3">
            <SignUpForm />
            <Link
                to="/"
                className="hover:text-red-700 transition-colors duration-150 text-red-500"
            >
                <div className="flex justify-center items-center gap-2">
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

export default SignUp;
