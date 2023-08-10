import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { StateAuthUser, StateCartUser } from "../../Redux/selector";
import { fetchLogoutUser } from "../../Redux/SliceReducer/userReducer";
import MenuHeader from "./Menu";
import Cart from "../Cart";
import { useEffect, useState } from "react";
import { current } from "../../Services/authService";
import { fetchCartUser, logout } from "../../Redux/SliceReducer/cartReducer";

const Header = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(StateAuthUser);
    const cart = useSelector(StateCartUser);
    const handleLogin = () => {
        navigate("/login");
    };
    const handleLogout = () => {
        dispatch(fetchLogoutUser());
        dispatch(logout());
    };

    useEffect(() => {
        fetchCurrentUser();
        dispatch(fetchCartUser());
    }, []);

    const fetchCurrentUser = async () => {
        try {
            let res = await current();
            if (res && res.status === 200) {
                setUser(res.data.user);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <header className="w-main h-[110px] py-[35px] flex justify-between items-center">
                <div className="text-2xl font-bold font-bungee">
                    <Link to="/">
                        <span>CRODIC CRYSTAL</span>
                    </Link>
                </div>
                <ul className="flex gap-5">
                    <li className="text-[14px]">
                        <div className="flex items-center font-semibold justify-center">
                            <span className="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-[15px] h-[15px] text-red-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            <span className="text-center">
                                (+84) 38 7737 544
                            </span>
                        </div>
                        <div className="font-light">
                            Mon-Sat 9:00AM - 8:00PM
                        </div>
                    </li>
                    <li className="w-[1px] h-[40px] border opacity-70"></li>
                    <li className="text-[14px]">
                        <div className="flex items-center font-semibold justify-center">
                            <span className="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-[15px] h-[15px] text-red-500"
                                >
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                            </span>
                            <span className="text-center">
                                SUPPORT@crodic.com
                            </span>
                        </div>
                        <div className="text-center font-light">
                            Online Support 24/7
                        </div>
                    </li>
                    <li className="w-[1px] h-[40px] border opacity-70"></li>
                    <li>
                        <span className="flex items-center h-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-red-500 cursor-pointer"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        </span>
                    </li>
                    <li className="w-[1px] h-[40px] border opacity-70"></li>
                    <li>
                        {auth ? (
                            <>
                                <Cart cart={cart}>
                                    <div className="flex justify-between items-center h-full">
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 text-red-500 cursor-pointer"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        <span className="pl-4 font-[300] cursor-pointer hover:text-red-500 transition-all duration-100">
                                            {cart?.length} item
                                        </span>
                                    </div>
                                </Cart>
                            </>
                        ) : (
                            <>
                                <div className="flex justify-between items-center h-full">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5 text-red-500 cursor-pointer"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    <span className="pl-4 font-[300] cursor-pointer hover:text-red-500 transition-all duration-100">
                                        0 item
                                    </span>
                                </div>
                            </>
                        )}
                    </li>
                    <li className="w-[1px] h-[40px] border opacity-70"></li>
                    <li>
                        <div className="flex items-center h-full justify-center">
                            {auth && user ? (
                                <div className="text-[14px] flex items-center gap-2">
                                    <div>
                                        <p>Xin Chào</p>
                                        {Object.keys(user).length === 0 &&
                                            "User"}
                                        <MenuHeader
                                            user={user}
                                            handleLogout={handleLogout}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <button
                                    onClick={handleLogin}
                                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors duration-300"
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </li>
                </ul>
            </header>
        </>
    );
};

export default Header;
