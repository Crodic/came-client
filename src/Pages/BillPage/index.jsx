import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../../Redux/SliceReducer/userReducer";
import { StateUser } from "../../Redux/selector";
import Logo from "../../Assets/Images/light.png";
import { getBill } from "../../Services/authService";
import { formatCurrency } from "../../Utility/helper";

const BillPage = () => {
    const { bid } = useParams();
    const [bill, setBill] = useState({});
    const [searchParams] = useSearchParams();
    const coupon = searchParams.get("coupon");
    const user = useSelector(StateUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCurrentUser());
        fetchBill(bid);
    }, []);

    const fetchBill = async (bid) => {
        try {
            let res = await getBill(bid);
            if (res && res.status === 200) {
                setBill(res.data.bill);
            }
        } catch (error) {
            console.log("error >> ", error);
            navigate("/");
        }
    };

    return (
        <>
            <div className="w-full">
                <h1 className="text-center text-green-600">Đơn Hàng Của Tôi</h1>
                <div className="w-[80%] min-h-[500px] mx-auto border p-4">
                    <div className="flex justify-between items-center">
                        <img src={Logo} alt="" className="w-[10%]" />
                        <h2 className="text-xl font-semibold text-red-500">
                            Figure Store - CAME
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-center">
                            Xác Nhận Đơn Hàng
                        </h2>
                        <hr className="mt-[5px] border border-red-200" />
                    </div>
                    <ul className="mt-[10px] px-[20px]">
                        <li className="mb-[15px]">
                            Mã Đơn Hàng:{" "}
                            <span className="text-red-500 px-[10px] py-[5px] bg-[#e5e5e555]">
                                {bill?._id}
                            </span>
                        </li>
                        <li className="mb-[15px]">
                            Người Nhận:{" "}
                            <span className="text-blue-500 px-[10px] py-[5px] bg-[#e5e5e555]">
                                {user?.firstname} {user?.lastname}
                            </span>
                        </li>
                        <li className="mb-[15px]">
                            Tổng Số Sản Phẩm:{" "}
                            <span className="text-red-700 px-[10px] py-[5px] bg-[#e5e5e555]">
                                {bill?.products?.length}
                            </span>
                        </li>
                        <li className="mb-[15px]">
                            Tổng Tiền:{" "}
                            <span className="text-yellow-600 px-[10px] py-[5px] bg-[#e5e5e555]">
                                {formatCurrency(bill?.total)}
                            </span>
                        </li>
                        <li className="mb-[15px]">
                            Mã Khuyến Mãi:{" "}
                            <span className="text-cyan-800 px-[10px] py-[5px] bg-[#e5e5e555]">
                                {coupon ? coupon : "Không Có"}
                            </span>
                        </li>
                        <li className="mb-[15px]">
                            Địa Chỉ Nhận Hàng:{" "}
                            <span className="text-red-500 px-[10px] py-[5px] bg-[#e5e5e555]">
                                {user?.address}
                            </span>
                        </li>
                        <li className="mb-[15px]">
                            Trạng Thái Đơn Hàng:{" "}
                            <span className="text-green-500 px-[10px] py-[5px] bg-[#e5e5e555]">
                                {bill?.status}
                            </span>
                        </li>
                    </ul>
                    <div className="flex justify-center items-end flex-col">
                        <h3>Người Xác Nhận Đơn</h3>
                        <p className="text-red-500">Admin Store</p>
                    </div>
                </div>
                <div className="text-[12px] text-red-500 text-center mb-[20px]">
                    Bạn có thể xem lại đơn hàng này và trạng thái đơn hàng trong
                    phần thông tin user
                </div>
            </div>
        </>
    );
};

export default BillPage;
