import { Link } from "react-router-dom";
import { formatCurrency } from "../../Utility/helper";

const CardFeature = ({ data }) => {
    return (
        <>
            <div className="w-[390px] h-[142px] border flex gap-3 p-[15px]">
                <div className="w-[30%]">
                    <img
                        src={data && data.images && data.images[0]}
                        alt=""
                        className="w-full h-full"
                    />
                </div>
                <div className="w-[70%] text-[14px] font-normal ">
                    <Link to={`/products/${data._id}`}>
                        <p
                            className="line-clamp-1 hover:text-red-500 cursor-pointer transition-colors duration-150"
                            title={data.title}
                        >
                            {data.title}
                        </p>
                    </Link>
                    <div className="my-1">
                        {data.totalRating > 1 ? (
                            Array(data.totalRating).map((_) => (
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
                            ))
                        ) : (
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
                        )}
                    </div>
                    <div className="font-light">
                        {formatCurrency(data.price)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardFeature;
