import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/Images/light.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../Services/authService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { StateAuthUser } from "../../Redux/selector";
import { useEffect } from "react";

export default function LoginForm() {
    const navigate = useNavigate();
    const auth = useSelector(StateAuthUser);
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
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
            confirmPassword: Yup.string()
                .trim()
                .oneOf([Yup.ref("password")], "Password is not match")
                .required("This is required"),
        }),
        onSubmit: async (e) => {
            e.firstname = e.firstname.trim();
            e.lastname = e.lastname.trim();
            await fetchRegister(e);
            navigate("/login");
        },
    });
    const fetchRegister = async (data) => {
        try {
            let res = await registerUser(data);
            if (res && res.status === 200) {
                toast("Đăng Ký Thành Công");
            }
        } catch (error) {
            console.log(error);
            toast("Đăng Ký Thất Bại. Vui Lòng Thử Lại Sao");
        }
    };

    useEffect(() => {
        if (auth) {
            navigate("/");
        }
    }, [auth]);

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center p-6 lg:px-8 border shadow-lg bg-[#bebebe2d] text-white">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm relative">
                    <img
                        className="mx-auto w-[100px] absolute top-0 left-[50%] translate-x-[-50%]"
                        src={Logo}
                        alt="CAME By Crodic Crystal"
                    />
                    <h2 className="mt-[100px] text-center text-2xl font-bold leading-9 tracking-tight">
                        C-A-M-E
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={formik.handleSubmit}>
                        <div className="flex gap-2">
                            <div className="w-[50%]">
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium leading-6"
                                >
                                    First Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={formik.values.firstname}
                                        onChange={formik.handleChange}
                                        name="firstname"
                                        type="text"
                                        required
                                        className="px-[15px] text-black block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {formik.errors.firstname &&
                                        formik.touched.firstname && (
                                            <p className="text-[12px] text-red-500">
                                                {formik.errors.firstname}
                                            </p>
                                        )}
                                </div>
                            </div>
                            <div className="w-[50%]">
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Last Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange}
                                        name="lastname"
                                        type="text"
                                        required
                                        className="px-[15px] text-black block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {formik.errors.lastname &&
                                        formik.touched.lastname && (
                                            <p className="text-[12px] text-red-500">
                                                {formik.errors.lastname}
                                            </p>
                                        )}
                                </div>
                            </div>
                        </div>

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
                                    required
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
                            </div>
                            <div className="mt-2">
                                <input
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    name="password"
                                    type="password"
                                    required
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
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    className="px-[15px] text-black block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {formik.errors.confirmPassword &&
                                    formik.touched.confirmPassword && (
                                        <p className="text-[12px] text-red-500">
                                            {formik.errors.confirmPassword}
                                        </p>
                                    )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm">
                        Bạn Đã Có Tài Khoản?{" "}
                        <Link
                            to="/login"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Đăng Nhập Ngay
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
