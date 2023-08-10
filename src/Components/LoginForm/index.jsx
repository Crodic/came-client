import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../../Assets/Images/light.png";
import { useDispatch } from "react-redux";
import { fetchLoginUser } from "../../Redux/SliceReducer/userReducer";

export default function LoginForm() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: Yup.object({
            email: Yup.string()
                .trim()
                .email("Email is not define")
                .required("Email is Required"),
            password: Yup.string()
                .trim()
                .min(8, "Password very Short")
                .max(24, "Password very Long")
                .required("Password is Required"),
        }),
        onSubmit: (e) => {
            dispatch(fetchLoginUser(e));
        },
    });
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center p-6 lg:px-8 border shadow-lg bg-[#bebebe2d] text-white">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm relative">
                    <img
                        className="mx-auto w-[100px] absolute top-0 left-[50%] translate-x-[-50%]"
                        src={Logo}
                        alt="CAME BY CRODIC CRYSTAL"
                    />
                    <h2 className="mt-[100px] text-center text-2xl font-bold leading-9 tracking-tight">
                        C-A-M-E
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={formik.handleSubmit}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="px-[15px] text-black block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {formik.errors.email &&
                                    formik.touched.email && (
                                        <p className="text-[12px] text-red-500">
                                            {formik.errors.email}
                                        </p>
                                    )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link
                                        to="/reset_password"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="px-[15px] text-black block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {formik.errors.password &&
                                    formik.touched.password && (
                                        <p className="text-[12px] text-red-500">
                                            {formik.errors.password}
                                        </p>
                                    )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm">
                        Bạn Chưa Có Tài Khoản?{" "}
                        <Link
                            to="/sign_up"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Đăng Ký Ngay
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
