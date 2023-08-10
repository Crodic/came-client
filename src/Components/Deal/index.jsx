import { Link, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../Utility/helper";
import { memo } from "react";

const Deal = ({ data }) => {
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/products/${id}`);
    };

    return (
        <>
            <div className="w-[321.667px] h-[580px] border p-5">
                <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-red-500"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="uppercase text-xl font-semibold text-center w-full">
                        daily deal
                    </span>
                </div>
                <div className="my-[20px] max-h-[280px]">
                    {data && data.images && <img src={data.images[0]} />}
                </div>
                <div>
                    <h4 className="text-base font-light w-full text-center line-clamp-3 hover:text-red-500 transition-colors duration-150">
                        <Link to={`/products/${data._id}`}>{data.title}</Link>
                    </h4>
                </div>
                <div className="flex justify-center items-center mt-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="w-full text-center mt-3">
                    <p>{data && data.price && formatCurrency(data.price)}</p>
                </div>
                <div className="w-full text-center mt-[15px] text-white">
                    <button
                        onClick={() => handleNavigate(data._id)}
                        className="bg-red-500 w-full px-[15px] py-[11px] flex justify-center items-center font-poppins border-white hover:bg-black transition-colors duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-[14px] h-[14px]"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="uppercase text-[14px] font-normal ml-3">
                            options
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default memo(Deal);
