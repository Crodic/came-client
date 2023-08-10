import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../../Services/service";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../Utility/helper";
import { useCallback } from "react";

const CardBill = ({ bill }) => {
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        mapData();
    }, []);

    const mapData = useCallback(async () => {
        let list = [];
        for (const item of bill.products) {
            let product = await fetchProduct(item.product);
            list.push(product);
        }
        setListProduct(list);
    }, [bill]);

    const fetchProduct = async (pid) => {
        try {
            let res = await getProduct(pid);
            if (res && res.status === 200) {
                return res.data.product;
            }
        } catch (error) {}
    };

    return (
        <div className="px-[25px] py-[15px] border mt-[5px]">
            <div className="flex justify-between w-full border-b pb-[5px]">
                <p>
                    Mã Đơn Hàng:{" "}
                    <Link
                        to={`/bill/${bill._id}`}
                        className="hover:text-red-500 transition-colors duration-200"
                    >
                        {bill._id}
                    </Link>
                </p>
                <p>Trạng Thái: {bill.status}</p>
            </div>
            <div className="mt-[15px]">
                <h2>Danh Sách Sản Phẩm: </h2>
                <ul>
                    {listProduct &&
                        listProduct.length > 0 &&
                        listProduct.map((item, index) => {
                            let count = bill.products[index].count;
                            return (
                                <li key={item._id}>
                                    <ul className="flex gap-3 item-center">
                                        <li className="text-red-500">
                                            {index + 1}.{" "}
                                        </li>
                                        <li>
                                            <Link
                                                to={`/products/${item._id}`}
                                                className="hover:text-blue-500 transition-colors duration-150"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-4 h-4 text-green-500"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                        </li>
                                        <li>
                                            Giá Sản Phẩm:{" "}
                                            {formatCurrency(item.price)}
                                        </li>
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-4 h-4 text-blue-900"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                                                />
                                            </svg>
                                        </li>
                                        <li>
                                            Số lượng:
                                            <i className="text-red-700">
                                                {" "}
                                                {count}
                                            </i>
                                        </li>
                                    </ul>
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div className="mt-[10px] bg-[#e2e2e25d] px-[20px]">
                <p>Mã Khách Hàng: {bill.orderBy}</p>
            </div>
            <div className="mt-[10px] bg-[#e2e2e25d] px-[20px]">
                <p>Thời Gian Tạo Đơn Hàng: {bill.createdAt}</p>
            </div>
            <div className="w-full flex justify-end py-[5px] px-[10px] bg-red-500 text-white mt-[15px]">
                Tổng Tiển: {formatCurrency(bill.total)}
            </div>
        </div>
    );
};

export default CardBill;
