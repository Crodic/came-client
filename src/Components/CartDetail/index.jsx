import { memo, useCallback, useEffect, useState } from "react";
import CartCard from "../../Components/Cart/Card";
import { getProduct } from "../../Services/service";
import { formatCurrency } from "../../Utility/helper";

const CartDetail = ({ cart, user, handleClickBill }) => {
    const [totalCart, setTotalCart] = useState(0);
    const getProductPrice = async (productId) => {
        try {
            let res = await getProduct(productId);
            if (res && res.status === 200) {
                return res.data.product.price;
            }
        } catch (error) {
            throw error;
        }
    };
    const getCartTotal = useCallback(async () => {
        // console.log("error is here");
        let total = 0;
        for (const item of cart) {
            const price = await getProductPrice(item.product);
            total += price * item.quantity;
        }
        setTotalCart(total);
    }, [cart]);

    useEffect(() => {
        getCartTotal();
    }, [cart]);
    return (
        <>
            {" "}
            <div className="w-[70%] border flex flex-col gap-3">
                {cart && cart.length > 0 ? (
                    cart.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="py-6 pr-6 border-b-2 flex hover:bg-[#dadada57] cursor-pointer"
                            >
                                <div className="w-[10%] flex justify-center items-center h-full">
                                    <span className="p-4 rounded-[50%] bg-red-500 w-[20px] h-[20px] flex justify-center items-center">
                                        {index + 1}
                                    </span>
                                </div>
                                <CartCard data={item} height="150px" />
                            </div>
                        );
                    })
                ) : (
                    <div className="w-full h-full flex justify-center items-center text-red-500 uppercase">
                        Giỏ Hàng Của Bạn Đang Rỗng
                    </div>
                )}
                {cart && cart.length > 0 && (
                    <div className="flex justify-between text-white items-center py-[10px] px-[20px] bg-red-500">
                        <div>Tổng Tiền: {formatCurrency(totalCart)}</div>
                        <div>
                            <button
                                onClick={() => handleClickBill(user._id)}
                                className="border rounded-lg p-[5px] bg-white text-black"
                            >
                                Tạo Hoá Đơn
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default memo(CartDetail);
