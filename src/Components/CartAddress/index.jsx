import { useState } from "react";
import AddressForm from "../AddressForm";
import { toast } from "react-toastify";
import { getCouponByName } from "../../Services/service";

const CartAddress = ({ user, cart, coupon, setCoupon }) => {
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState(false);
    const handleDisabled = async () => {
        if (coupon.length > 0) {
            if (fetchCouponByName(coupon)) {
                setDisabled(!disabled);
                setError(false);
            }
        } else {
            toast.warning("Bạn Phải Có Coupon");
        }
    };

    const fetchCouponByName = async (name) => {
        try {
            let res = await getCouponByName(name);
            if (res && res.status === 200) {
                toast.success("Thêm Coupon Thành Công");
                return true;
            } else {
                return false;
            }
        } catch (error) {
            setDisabled(false);
            setError(true);
            return false;
        }
    };
    return (
        <>
            <div className="w-[30%] border min-h-[200px]">
                {user?.address ? (
                    <div>
                        <h3 className="px-[10px] py-[5px] bg-red-500 text-white">
                            Thông Tin Người Nhận Hàng
                        </h3>
                        <ul className="p-4">
                            <li className="mb-[15px]">
                                Người Nhận Hàng:{" "}
                                <span className="opacity-80 font-semibold text-red-700">
                                    {user?.firstname} {user?.lastname}
                                </span>
                            </li>
                            <li className="mb-[15px]">
                                Email Xác Nhận:{" "}
                                <span className="opacity-80 font-semibold text-blue-700">
                                    {user?.email}
                                </span>
                            </li>
                            <li className="mb-[15px]">
                                Địa Chỉ:{" "}
                                <span className="opacity-80 font-semibold text-green-700">
                                    {user?.address}
                                </span>
                            </li>
                            <li className="mb-[15px]">
                                Tổng Số Sản Phẩm:{" "}
                                <span className="opacity-80 font-semibold text-orange-900">
                                    {cart?.length}
                                </span>
                            </li>
                            <li className="mb-[15px]">
                                Trạng Thái:{" "}
                                <span className="opacity-80 font-semibold text-yellow-800">
                                    {user?.isBlocked
                                        ? "Bị Giới Hạn"
                                        : "Bình Thường"}
                                </span>
                            </li>
                            <li className="text-[12px] opacity-50 text-red-500 mb-[10px]">
                                Bạn Không Thể Thay Đổi Thông Tin Tại Đây.
                            </li>
                            <li className="flex flex-col">
                                <hr className="border-[2px] mb-[10px] border-black" />
                                <label htmlFor="">Mã Khuyến Mãi: </label>
                                <div className="flex gap-1">
                                    <input
                                        disabled={disabled}
                                        type="text"
                                        value={coupon}
                                        onChange={(e) =>
                                            setCoupon(e.target.value)
                                        }
                                        placeholder="Enter Your Coupon"
                                        className={`w-[70%] border px-[10px] h-[30px] py-[10px] focus:border-red-500 text-[14px] ${
                                            error && "border-red-500"
                                        }`}
                                    />
                                    <button
                                        onClick={handleDisabled}
                                        className="w-[30%] flex items-center justify-center bg-red-500 rounded-md text-white h-[30px] py-[10px]"
                                    >
                                        {disabled ? "Thay Đổi" : "Xác Nhận"}
                                    </button>
                                </div>
                                {error && (
                                    <span className="text-red-700 text-[12px]">
                                        Mã Này Không Tồn Tại
                                    </span>
                                )}
                                <span className="text-[12px] text-red-500 mt-[5px] uppercase">
                                    Mã Khuyến Mãi Sẽ Tự Động Thêm Vào Khi Bạn
                                    Tạo Đơn Hàng.
                                </span>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div>
                        <h3 className="bg-red-500 text-white px-[10px] py-[5px]">
                            Bạn Chưa Có Địa Chỉ Nhận Hàng !
                        </h3>
                        <div className="px-[10px] py-[5px]">
                            <AddressForm />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartAddress;
