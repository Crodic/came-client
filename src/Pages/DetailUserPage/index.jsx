import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    fetchCurrentUser,
    fetchUpdateUser,
} from "../../Redux/SliceReducer/userReducer";
import { StateAuthUser, StateUser } from "../../Redux/selector";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormUser from "../../Components/FormUser";

const DetailUserPage = () => {
    const user = useSelector(StateUser);
    const auth = useSelector(StateAuthUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstname: user?.firstname || "",
            lastname: user?.lastname || "",
            password: "CAME_STORE_BCRYPT",
            email: user?.email || "",
            phone: user?.phone || "",
            address: user?.address || "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string()
                .trim()
                .min(3, "first name is not define")
                .max(30, "first name is very long")
                .required("First Name is required"),
            lastname: Yup.string()
                .trim()
                .min(2, "last name is not define")
                .max(30, "last name is very long")
                .required("Last name is Required"),
            email: Yup.string()
                .email("Email is not define")
                .required("Email is Required"),
            password: Yup.string()
                .trim()
                .min(8, "password is very short")
                .max(24, "password is very long")
                .required("Password is Required"),
            phone: Yup.string()
                .trim()
                .min(10, "phone is not define")
                .max(12)
                .required("Phone is Required"),
            address: Yup.string()
                .trim()
                .min(5)
                .max(100)
                .required("Address is required"),
        }),
        onSubmit: (e) => {
            delete e.password;
            const obj = e;
            dispatch(fetchUpdateUser(obj));
        },
    });

    useEffect(() => {
        if (!auth) {
            navigate("/login");
        }
    }, [auth]);

    return (
        <div>
            <h2 className="w-full px-[20px] py-[10px] bg-red-500 text-white text-center uppercase text-lg">
                Thông Tin Người Dùng
            </h2>
            <div className="flex gap-3">
                <div className="w-[60%] border px-[20px] py-[15px]">
                    <FormUser formik={formik} />
                </div>
                <div className="w-[40%]">
                    <h2 className="text-red-500 text-xl uppercase text-center w-full my-[20px]">
                        ! Lưu Ý Quan Trọng !
                    </h2>
                    <hr />
                    <ul className="list-decimal px-[20px] mt-[10px]">
                        <li>
                            Bạn Có Thể Bấm Vào{" "}
                            <span className="text-blue-500">Thay Đổi</span> Để
                            Thay Đổi Thông Tin Của Bạn.
                        </li>
                        <li>
                            Sau Khi Thay Đổi, Bấm Vào{" "}
                            <span className="text-red-500">Xác Nhận</span> Để
                            Ngăn Chặn Trình Chỉnh Sửa (Tuỳ Chọn)
                        </li>
                        <li>
                            Khi Bấm{" "}
                            <span className="text-red-500">Xác Nhận</span> Thông
                            Tin{" "}
                            <span className="text-blue-700">
                                Chưa Được Chỉnh
                            </span>{" "}
                            Sửa Cho Tới Khi Bạn Lưu Thông Tin
                        </li>
                        <li>
                            Đối Với Phần Password, Bạn sẽ Không Cần Lưu Thông
                            Tin Để Chỉnh Sửa
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DetailUserPage;
