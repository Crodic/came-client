import { Link, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../Utility/helper";
import { createElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddCartUser } from "../../Redux/SliceReducer/cartReducer";
import { StateAuthUser } from "../../Redux/selector";
import { toast } from "react-toastify";

const listIcon = [
    {
        key: 1,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
            >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
        ),
        type: "like",
    },
    {
        key: 2,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
            >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
        ),
        type: "cart",
    },
    {
        key: 3,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
            >
                <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        type: "show",
    },
];

const CardProduct = ({ data }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(StateAuthUser);
    const handleLike = (id) => {
        console.log(id);
    };

    const handleAddCart = (id) => {
        if (auth) {
            const obj = { pid: id, quantity: 1 };
            dispatch(fetchAddCartUser(obj));
            toast.success("Thêm Sản Phẩm Thành Công");
        } else {
            toast.warning("Bạn Cần Phải Đăng Nhập Để Sử Dụng Chức Năng Này");
        }
    };

    const handleShow = (id) => {
        navigate(`/products/${id}`);
    };

    const handleClick = (type, { _id }) => {
        if (type === "like") {
            handleLike(_id);
        } else if (type === "show") {
            handleShow(_id);
        } else {
            handleAddCart(_id);
        }
    };

    return (
        <>
            <div className="w-full border p-2">
                <div className="cursor-pointer relative group overflow-hidden">
                    <img
                        src={data.images && data.images[0]}
                        alt={data.title}
                        className="w-[275px] max-h-[300px] min-h-[300px]"
                    />
                    <div className="flex justify-center gap-3 items-center absolute bottom-[-100px] left-[5px] right-[5px] h-[50px] group-hover:bottom-[0] transition-all duration-300">
                        {listIcon.map((element) => {
                            return (
                                <div
                                    key={element.key}
                                    onClick={() =>
                                        handleClick(element.type, data)
                                    }
                                    className="shadow-md p-3 rounded-[50%] bg-white hover:bg-black hover:text-white transition-colors duration-100"
                                >
                                    {createElement(element.icon.type, {
                                        ...element.icon.props,
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="my-2">
                    <Link
                        to={`/products/${data._id}`}
                        className="text-base font-normal line-clamp-1 text-start hover:text-red-500 transition-colors duration-150x"
                        title={data.title}
                    >
                        {data.title}
                    </Link>
                </div>
                <div className="flex justify-start items-center">
                    {data.totalRating > 1 ? (
                        Array.from({
                            length: data.totalRating > 5 ? 5 : data.totalRating,
                        }).map((_, index) => (
                            <svg
                                key={index}
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
                <div className="text-start my-2">
                    {formatCurrency(data.price)}
                </div>
            </div>
        </>
    );
};

export default CardProduct;
