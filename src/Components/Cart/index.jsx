import {
    Popover,
    PopoverContent,
    PopoverHandler,
} from "@material-tailwind/react";
import CartCard from "./Card";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateUser } from "../../Redux/selector";
import { toast } from "react-toastify";
import { memo } from "react";

const Cart = ({ children, cart }) => {
    const user = useSelector(StateUser);
    const navigate = useNavigate();
    const handlePayment = () => {
        if (cart.length === 0) {
            toast.warning("Giỏ Hàng Của Bạn Đang Rỗng !!!. Hãy mua gì đó đi");
            return;
        }
        navigate(`/cart/${user._id}`);
    };
    return (
        <Popover>
            <PopoverHandler>{children}</PopoverHandler>
            <PopoverContent className="min-h-max max-h-[400px] w-[450px] overflow-y-scroll relative z-[1000] flex flex-col gap-3">
                <h3 className="text-center py-[5px] bg-red-500 text-white uppercase font-semibold">
                    Giỏ Hàng Của Bạn
                </h3>
                {cart && cart.length > 0 ? (
                    cart.map((item) => {
                        return <CartCard key={item._id} data={item} />;
                    })
                ) : (
                    <p className="text-[20px] min-h-[200px] flex items-center justify-center text-center text-black font-semibold">
                        Giỏ Hàng Rỗng
                    </p>
                )}
                <div className="w-full text-center">
                    <button
                        onClick={handlePayment}
                        className="px-[15px] py-[5px] bg-red-500 rounded-md text-white w-full uppercase font-semibold"
                    >
                        Đến Trang Thanh Toán
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default memo(Cart);
