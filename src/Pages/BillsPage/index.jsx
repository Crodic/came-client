import { useState } from "react";
import { useSelector } from "react-redux";
import { StateUser } from "../../Redux/selector";
import { getBills } from "../../Services/authService";
import { useEffect } from "react";
import CardBill from "../../Components/CardBill";

const BillsPage = () => {
    const user = useSelector(StateUser);
    const [listBill, setListBill] = useState([]);

    useEffect(() => {
        fetchListBill(user._id);
    }, []);

    const fetchListBill = async (uid) => {
        try {
            let res = await getBills(uid);
            if (res && res.status === 200) {
                setListBill(res.data.bill);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="mb-[20px]">
            <h2 className="text-[24px] text-white uppercase text-center px-[20px] py-[7px] bg-red-500">
                Đơn Hàng Của Tôi
            </h2>
            <div>
                {listBill && listBill.length > 0 ? (
                    listBill.map((bill) => {
                        return <CardBill bill={bill} key={bill._id} />;
                    })
                ) : (
                    <div className="w-full min-h-[80vh] flex justify-center items-center text-red-500 uppercase border mt-[10px]">
                        Bạn Chưa có hoá đơn nào. Mau đến mua sắm thôi !!
                    </div>
                )}
            </div>
        </div>
    );
};

export default BillsPage;
