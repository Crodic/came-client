import FieldForm from "./FieldForm";

const FormUser = ({ formik }) => {
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <FieldForm
                    value={formik.values?.firstname || ""}
                    name={"firstname"}
                    type={"text"}
                    onChange={formik.handleChange}
                    label="First Name: "
                />
                {formik.errors.firstname && formik.touched.firstname && (
                    <p className="text-[12px] text-red-500">
                        {formik.errors.firstname}
                    </p>
                )}
                <FieldForm
                    value={formik.values?.lastname || ""}
                    name={"lastname"}
                    type={"text"}
                    onChange={formik.handleChange}
                    label="Last Name: "
                />
                {formik.errors.lastname && formik.touched.lastname && (
                    <p className="text-[12px] text-red-500">
                        {formik.errors.lastname}
                    </p>
                )}
                <FieldForm
                    value={formik.values?.email || ""}
                    name={"email"}
                    type={"email"}
                    onChange={formik.handleChange}
                    label="Email: "
                />
                {formik.errors.email && formik.touched.email && (
                    <p className="text-[12px] text-red-500">
                        {formik.errors.email}
                    </p>
                )}
                <FieldForm
                    value={formik.values?.password || "*******"}
                    name={"password"}
                    type={"password"}
                    onChange={formik.handleChange}
                    label="Password: "
                />
                {formik.errors.password && formik.touched.password && (
                    <p className="text-[12px] text-red-500">
                        {formik.errors.password}
                    </p>
                )}
                <FieldForm
                    value={formik.values?.phone || ""}
                    name={"phone"}
                    type={"text"}
                    onChange={formik.handleChange}
                    label="Phone: "
                />
                {formik.errors.phone && formik.touched.phone && (
                    <p className="text-[12px] text-red-500">
                        {formik.errors.phone}
                    </p>
                )}
                <FieldForm
                    value={formik.values?.address || ""}
                    name={"address"}
                    type={"text"}
                    onChange={formik.handleChange}
                    label="Address: "
                />
                {formik.errors.address && formik.touched.address && (
                    <p className="text-[12px] text-red-500">
                        {formik.errors.address}
                    </p>
                )}
                <div className="mt-[20px]">
                    <button
                        type="submit"
                        className="px-[15px] py-[8px] bg-red-500 text-white rounded-md"
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    );
};

export default FormUser;
