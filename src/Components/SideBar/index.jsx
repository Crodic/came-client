import ItemBar from "../ItemBar";

const SideBar = () => {
    return (
        <nav className="border">
            <div className="flex items-center text-white font-semibold bg-red-500 py-[10px] px-[20px] uppercase">
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </span>
                <span className="ml-4">ALL CATEGORY</span>
            </div>
            <div>
                <ItemBar />
            </div>
        </nav>
    );
};

export default SideBar;
