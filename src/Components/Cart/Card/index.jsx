import { memo, useEffect, useState } from "react";
import { getProduct } from "../../../Services/service";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    fetchAddCartUser,
    fetchRemoveCartUser,
} from "../../../Redux/SliceReducer/cartReducer";
import { toast } from "react-toastify";
import { formatCurrency } from "../../../Utility/helper";

const CartCard = ({ data, height = "100px" }) => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(data.quantity || 1);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProduct(data.product);
    }, []);

    const fetchProduct = async (pid) => {
        try {
            let res = await getProduct(pid);
            if (res && res.status === 200) {
                setProduct(res.data.product);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeQuantity = (e) => {
        let count = 100;
        if (e.target.value > count) {
            e.target.value = count;
        }
        if (e.target.value === "" || e.target.value === 0) {
            e.target.value = 1;
        }
        if (e.target.value === 0) {
            e.target.value = 1;
        }
        setQuantity(e.target.value);
        const obj = { pid: data.product, quantity: e.target.value };
        dispatch(fetchAddCartUser(obj));
    };

    const handleDelete = (pid) => {
        dispatch(fetchRemoveCartUser(pid));
        toast.success("Xoá Sản Phẩm Thành Công");
    };

    return (
        <div
            className={`w-full flex items-start gap-3`}
            style={{ height: height }}
        >
            <div className="w-[30%]">
                <img
                    src={product && product.images && product.images[0]}
                    alt=""
                    className="w-full object-contain"
                    style={{ maxHeight: height }}
                />
            </div>
            <div className="flex flex-col justify-start gap-2 w-[70%]">
                <Link
                    to={`/products/${product._id}`}
                    className="hover:text-red-500 transition-colors duration-300 max-w-fit"
                >
                    {product.title}
                </Link>
                <div className="flex justify-around items-center">
                    <p>
                        Giá Tiền:{" "}
                        <span className="text-red-500">
                            {formatCurrency(product?.price)}
                        </span>
                    </p>
                    <p>
                        <b>Số Lượng: </b>
                        <input
                            type="number"
                            onChange={(e) =>
                                handleChangeQuantity(e, product._id)
                            }
                            value={quantity}
                            className="ml-[5px] w-[50px] border pl-[10px]"
                        />
                    </p>
                </div>
                <div className="max-w-fit">
                    <span
                        onClick={() => handleDelete(product._id)}
                        className="hover:text-red-500 transition-colors duration-200 cursor-pointer flex items-center gap-1"
                    >
                        <i>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 text-red-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </i>
                        Xoá Sản Phẩm
                    </span>
                </div>
            </div>
        </div>
    );
};

export default memo(CartCard);
