import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StateProduct } from "../../Redux/selector";

const tabsData = [
    {
        key: 1,
        title: "Description",
    },
    {
        key: 2,
        title: "Review",
    },
];

const Tabs = () => {
    const [active, setActive] = useState(0);
    let { description, rating } = useSelector(StateProduct);
    description = description?.split("\n\n");
    let array = [description, rating];

    const handleClick = (index) => {
        setActive(index);
    };

    return (
        <div className="w-main border">
            <ul className="h-[41px] uppercase flex text-[15px] gap-1">
                {tabsData?.map((tab, index) => {
                    return (
                        <li
                            onClick={() => handleClick(index)}
                            key={tab.key}
                            className={`py-[9px] px-5 cursor-pointer bg-[#f1f1f1] hover:bg-[#fff] transition-colors duration-200 ${
                                active === index ? "bg-[#fff]" : ""
                            }`}
                        >
                            {tab.title}
                        </li>
                    );
                })}
            </ul>
            <div className="border min-h-[100px] p-[10px]">
                <ul>
                    {array &&
                        array[active] !== undefined &&
                        array[active].map((item, index) => {
                            if (active === 0) {
                                return (
                                    <li
                                        key={index}
                                        className="py-[10px] px-[20px]"
                                    >
                                        {item}
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        key={index}
                                        className="py-[10px] px-[20px]"
                                    >
                                        <p>
                                            {item.postedBy.firstname}{" "}
                                            {item.postedBy.lastname}
                                        </p>
                                        <ul className="flex gap-1">
                                            {Array.from({
                                                length: item.star,
                                            }).map((_, index) => {
                                                return (
                                                    <li key={index}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-4 h-4 text-yellow-500"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <p className="text-[14px] font-light">
                                            {item.comment}
                                        </p>
                                    </li>
                                );
                            }
                        })}
                    {array && array[1] !== undefined && active === 1 && (
                        <div className="w-full flex justify-end items-center">
                            <button className="py-[5px] px-[10px] bg-red-500 text-white rounded-md hover:bg-red-700 transition-colors duration-500">
                                Viết Đánh Giá
                            </button>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Tabs;
