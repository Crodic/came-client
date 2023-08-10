import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Calendar from "../../../Components/Calendar";
import { useState } from "react";
import { useMemo } from "react";

const listTask = [
    {
        key: 1,
        primaryColor: "bg-primaryBlue",
        secondaryColor: "bg-secondaryBlue",
        title: "Manager",
        action: "Go to Manager",
        path: "/manager",
    },
    {
        key: 2,
        primaryColor: "bg-primaryGreen",
        secondaryColor: "bg-secondaryGreen",
        title: "Admin Create",
        action: "Go to Created",
        path: "/create",
    },
    {
        key: 3,
        primaryColor: "bg-primaryRed",
        secondaryColor: "bg-secondaryRed",
        title: "Report",
        action: "Go to Report",
        path: "/report",
    },
];

const task = [];

const HomeAdmin = () => {
    const [value, onChange] = useState(new Date());
    const date = useMemo(() => {
        return value;
    }, []);
    const handleClick = () => {
        toast.success("Điểm Danh Thành Công");
    };
    return (
        <div className="w-full">
            <h1 className="text-center py-[12px] border-b mb-[20px]">
                Xin Chào Admin, Crodic
            </h1>
            <div className="flex justify-around items-center">
                {listTask.map((task) => {
                    return (
                        <div
                            key={task.key}
                            className="w-[30%] border min-h-[120px] shadow-md hover:shadow-xl rounded-md cursor-pointer text-white"
                        >
                            <Link to={task.path}>
                                <div
                                    className={`${task.primaryColor} w-full h-[85px] border-b border-black rounded-t-md flex justify-start
                                items-center pl-[15px]`}
                                >
                                    {task.title}
                                </div>
                                <div
                                    className={`${task.secondaryColor} w-full h-[35px] rounded-b-md
                                items-center px-[15px] flex justify-between `}
                                >
                                    {task.action}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 font-bold"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-end mx-[20px] my-[20px]">
                <Button variant="filled" onClick={handleClick}>
                    Điểm Danh
                </Button>
            </div>
            <hr className="my-[10px]" />
            <h2 className="px-[20px] flex justify-between items-center">
                <div className="uppercase text-red-500 font-semibold flex items-center gap-2">
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
                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                        />
                    </svg>
                    Công Việc
                </div>
                <div>
                    <span className="text-blue-500">Hôm Nay: </span>{" "}
                    {date && date.toDateString()}
                </div>
            </h2>
            <hr className="mb-[20px] mt-[10px]" />
            <div className="flex items-start gap-3 px-[20px] mb-[20px]">
                <div className="w-[30%]">
                    <Calendar value={value} onChange={onChange} />
                </div>
                <div className="w-[70%] min-h-[50px] pl-[15px] border-l-2">
                    <h3>Công việc hôm nay:</h3>
                    {task && task.length > 0 ? (
                        task.map((item, index) => {
                            return <div key={index}>{item.task}</div>;
                        })
                    ) : (
                        <h3 className="min-h-[245px] flex justify-center items-center text-red-700 uppercase font-bold">
                            Hiện Tại Bạn Không Có Công Việc Gì
                        </h3>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeAdmin;
