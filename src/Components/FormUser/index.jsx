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
                <FieldForm
                    value={formik.values?.lastname || ""}
                    name={"lastname"}
                    type={"text"}
                    onChange={formik.handleChange}
                    label="Last Name: "
                />
                <FieldForm
                    value={formik.values?.email || ""}
                    name={"email"}
                    type={"email"}
                    onChange={formik.handleChange}
                    label="Email: "
                />
                <FieldForm
                    value={formik.values?.password || "*******"}
                    name={"password"}
                    type={"password"}
                    onChange={formik.handleChange}
                    label="Password: "
                />
                <FieldForm
                    value={formik.values?.phone || ""}
                    name={"phone"}
                    type={"text"}
                    onChange={formik.handleChange}
                    label="Phone: "
                />
                <FieldForm
                    value={formik.values?.address || ""}
                    name={"address"}
                    type={"text"}
                    onChange={formik.handleChange}
                    label="Address: "
                />
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
