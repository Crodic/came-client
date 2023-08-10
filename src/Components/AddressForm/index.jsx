import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { fetchUpdateAddress } from "../../Redux/SliceReducer/userReducer";
import * as Yup from "yup";

const AddressForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            address: "",
        },
        validationSchema: Yup.object().shape({
            address: Yup.string()
                .required("Bạn Cần Phải Nhập Đại Chỉ")
                .min(5, "Địa chỉ không hợp lệ"),
        }),
        onSubmit: (e) => {
            dispatch(fetchUpdateAddress(e));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="" className="block mb-[10px]">
                Địa Chỉ:{" "}
            </label>
            <input
                className={`border rounded-lg block w-full h-[40px] px-[10px] ${
                    formik.errors.address &&
                    formik.touched.address &&
                    "border-red-500"
                }`}
                type="text"
                placeholder="Nhập Địa Chỉ Của Bạn."
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
            />
            {formik.errors.address && formik.touched.address && (
                <p className="text-red-500 text-xs">{formik.errors.address}</p>
            )}
            <button
                type="submit"
                className="py-[5px] px-[10px] bg-red-500 rounded-xl mt-[10px] text-white"
            >
                Xác Nhận
            </button>
        </form>
    );
};

export default AddressForm;
