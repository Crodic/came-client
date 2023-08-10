import { Link, useLocation } from "react-router-dom";
import { firstLetterUppercase } from "../../Utility/helper";
import { memo } from "react";

const BreakCrumb = ({ title }) => {
    const { pathname } = useLocation();
    const listPath = pathname.split("/");
    let list = [];

    if (!title) title = "";

    return (
        <nav className="pt-2 text-sm">
            <ul className="flex">
                <li className="ml-[3px] hover:text-red-500 transition-colors duration-150">
                    <Link
                        to="/"
                        style={{
                            display: "flex",
                            gap: "2px",
                            alignItems: "center",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                        >
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                        <span>Home</span>
                    </Link>
                </li>
                <li className="ml-[3px] opacity-25"> / </li>
                {listPath.map((item, index) => {
                    let nameProduct = "";
                    if (index === 0) {
                        return;
                    }
                    if (item.length === 24) {
                        nameProduct = title;
                    }
                    list.push(item);
                    return (
                        <li className="flex" key={index}>
                            <div className="ml-[3px] hover:text-red-500 transition-colors duration-150">
                                <Link to={`/${list.join("/")}`}>
                                    {" "}
                                    {nameProduct === ""
                                        ? firstLetterUppercase(item)
                                        : nameProduct}{" "}
                                </Link>
                            </div>
                            {index !== listPath.length - 1 && (
                                <div className="ml-[3px] opacity-25"> / </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default memo(BreakCrumb);
