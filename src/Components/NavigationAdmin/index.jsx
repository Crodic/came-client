import React from "react";
import { Navbar, Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { StateAuthUser } from "../../Redux/selector";
import { Link } from "react-router-dom";

export default function NavigationAdmin() {
    const auth = useSelector(StateAuthUser);
    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-3 rounded-none">
            <div className="flex items-center justify-end text-blue-gray-900">
                <div className="gap-2 lg:flex">
                    {auth ? (
                        <Link
                            to="/"
                            className="flex items-center gap-1 font-semibold hover:underline hover:text-red-500 transition-colors duration-200 cursor-pointer"
                        >
                            Go To Main Website
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
                                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                />
                            </svg>
                        </Link>
                    ) : (
                        <Button variant="gradient" size="sm">
                            <Link to="/login">Login</Link>
                        </Button>
                    )}
                </div>
            </div>
        </Navbar>
    );
}
