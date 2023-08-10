import { Link, useLocation } from "react-router-dom";
import { formatCurrency } from "../../Utility/helper";
import Quantity from "../Quantity";
import CardService from "./CardService";
import SlideDetail from "./SlideDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddCartUser } from "../../Redux/SliceReducer/cartReducer";
import { refreshUser } from "../../Redux/SliceReducer/userReducer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { StateCartLoading } from "../../Redux/selector";

const dataService = [
    {
        key: 1,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
            >
                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                <path
                    fillRule="evenodd"
                    d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        title: "Hàng mới 100%",
        description: "Nguyên Seal",
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
                <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        title: "Dễ Hư Hỏng",
        description: "Hoàn tiền khi có vấn đề",
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
                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
            </svg>
        ),
        title: "Tư vấn trực tiếp",
        description: "Hổ trợ 24/7",
    },
    {
        key: 4,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
            >
                <path
                    fillRule="evenodd"
                    d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        title: "Tem Chính Hãng",
        description: "Cam kết 100%",
    },
];

const Information = ({ data }) => {
    const [quantity, setQuantity] = useState(1);
    const { pathname } = useLocation();
    const loading = useSelector(StateCartLoading);
    const description = data?.description?.split("\n\n");
    const dispatch = useDispatch();

    useEffect(() => {
        setQuantity(1);
    }, [pathname]);

    const handleAddCart = (pid, quantity) => {
        const obj = { pid, quantity };
        dispatch(fetchAddCartUser(obj));
        toast.success(
            "Thêm Sản Phẩm Thành Công. Vui Lòng Đợi Vài Giây Để Giỏ Hàng Được Cập Nhật"
        );
        setTimeout(() => {
            dispatch(refreshUser());
        }, 200);
    };

    return (
        <div className="flex justify-between gap-4 items-start mt-[20px] mb-[50px]">
            <div className="w-[40%] border">
                <SlideDetail />
            </div>
            <div className="w-[35%] border p-3">
                <h2 className="text-[30px] font-semibold">
                    {formatCurrency(data.price)}
                </h2>
                <div className="flex items-center gap-3">
                    <span className="font-bold">Mã sản phẩm: </span>
                    <Link to={`/products/${data._id}`}>
                        <p className="hover:text-red-500 transition-all duration-150">
                            {data._id}
                        </p>
                    </Link>
                </div>
                <ul className="mt-[10px] flex items-center">
                    <span className="mr-[10px]">Đánh Giá: </span>
                    {data.totalRating > 1 ? (
                        Array.from({
                            length: data.totalRating > 5 ? 5 : data.totalRating,
                        }).map((_, index) => {
                            return (
                                <li key={index}>
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
                                </li>
                            );
                        })
                    ) : (
                        <>
                            <li>
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
                            </li>
                        </>
                    )}
                </ul>
                <div>
                    <h3 className="my-[10px] text-[14px]">
                        Đã Bán:
                        <span className="opacity-50 ml-[10px]">
                            {data.sold}
                        </span>
                    </h3>
                </div>
                <ul className="text-base font-light list-disc ml-[17px] mt-[10px]">
                    {description &&
                        description.length > 0 &&
                        description.map((string, index) => {
                            return <li key={index}>{string}</li>;
                        })}
                    <li>
                        <span className="font-semibold">Nhà Sản Xuất: </span>
                        <span className="hover:text-red-500 transition-colors duration-150">
                            <Link to={`/products?brand=${data.brand?._id}`}>
                                {data.brand?.title}
                            </Link>
                        </span>
                    </li>
                    <li>
                        <span className="font-semibold">Chuyên Mục: </span>
                        <span className="hover:text-red-500 transition-colors duration-150">
                            <Link
                                to={`/products?category=${data.category?._id}`}
                            >
                                {data.category?.title}
                            </Link>
                        </span>
                    </li>
                </ul>
                <div className="flex justify-start items-center mt-[15px] ml-[20px] gap-[100px] h-max">
                    <h3>Số Lượng: </h3>
                    <Quantity
                        maxCount={100}
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />
                </div>
                <div className="mt-[20px]">
                    <button
                        onClick={() => handleAddCart(data._id, quantity)}
                        className="uppercase text-white bg-red-500 w-full py-[11px] hover:bg-[#333333] transition-colors duration-300"
                    >
                        {loading ? "Vui Lòng Chờ 1 Lát" : "Thêm Vào Giỏ Hàng"}
                    </button>
                </div>
            </div>
            <div className="w-[20%] flex flex-col gap-3">
                {dataService.map((item) => {
                    return <CardService key={item.key} service={item} />;
                })}
            </div>
        </div>
    );
};

export default Information;
