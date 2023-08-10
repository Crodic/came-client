import { useState } from "react";
import DropDown from "../Dropdown";
import { NavLink } from "react-router-dom";

const ItemMenu = ({ item, depthLevel }) => {
    const [show, setShow] = useState(false);
    const handleEnter = () => {
        setShow(true);
    };
    const handleLeave = () => {
        setShow(false);
    };
    return (
        <>
            <div
                className="relative"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
                <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                        isActive
                            ? "text-red-500 hover:text-red-500 transition-colors duration-100 w-full px-3 flex items-center"
                            : " hover:text-red-500 transition-colors duration-100 w-full px-3 flex items-center"
                    }
                >
                    <span className="w-full">{item.title}</span>
                    {item.subMenu && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    )}
                </NavLink>
                {item.subMenu && (
                    <DropDown
                        subItem={item.children}
                        show={show}
                        depthLevel={depthLevel}
                    />
                )}
            </div>
        </>
    );
};

export default ItemMenu;
