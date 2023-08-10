import { useDispatch, useSelector } from "react-redux";
import { StateAuthUser, StateCartUser, StateUser } from "../../Redux/selector";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    fetchCartUser,
    fetchDeleteCart,
} from "../../Redux/SliceReducer/cartReducer";
import { toast } from "react-toastify";
import { useCallback } from "react";
import CartDetail from "../../Components/CartDetail";
import CartAddress from "../../Components/CartAddress";
import { useState } from "react";
import { createBill } from "../../Services/authService";

const CartPage = () => {
    const auth = useSelector(StateAuthUser);
    const user = useSelector(StateUser);
    const cart = useSelector(StateCartUser);

    const [coupon, setCoupon] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!auth) {
            navigate("/login");
        }
    }, [auth]);

    useEffect(() => {
        dispatch(fetchCartUser());
    }, []);

    const handleClickBill = useCallback(
        (uid) => {
            if (!user.address) {
                toast.warning(
                    "Bạn Cần Phải Cập Nhật Địa Chỉ Cho Tài Khoản Của Bạn !"
                );
                return;
            }
            fetchBillUser(coupon);
            setTimeout(() => {
                dispatch(fetchDeleteCart(uid));
            }, 1000);
        },
        [user, coupon]
    );

    const fetchBillUser = async (coupon) => {
        try {
            let res = await createBill(coupon);
            if (res && res.status === 200) {
                toast.success("Tạo Đơn Hàng Thành Công");
                if (coupon.length === 0) {
                    navigate(`/bill/${res.data.bill._id}`);
                } else {
                    navigate(`/bill/${res.data.bill._id}?coupon=${coupon}`);
                }
            }
        } catch (error) {
            console.log("error >>", error);
            toast.error(
                "Tạo Đơn Hàng Thất Bại. Bạn sẽ được chuyển về trang chủ"
            );
        }
    };

    return (
        <>
            <div className="mb-[50px]">
                <h2 className="text-center text-white text-xl px-[10px] py-[15px] bg-red-500">
                    Giỏ Hàng Của Bạn
                </h2>
                <div className="flex gap-2 mt-[15px]">
                    <CartDetail
                        cart={cart}
                        user={user}
                        handleClickBill={handleClickBill}
                    />
                    <CartAddress
                        cart={cart}
                        user={user}
                        coupon={coupon}
                        setCoupon={setCoupon}
                    />
                </div>
            </div>
        </>
    );
};

export default CartPage;
