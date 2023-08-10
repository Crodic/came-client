import { useState } from "react";

const FieldForm = ({ value, label, name, type, onChange }) => {
    const [disabled, setDisabled] = useState(true);
    return (
        <div>
            <label htmlFor="" className="block max-w-fit">
                {label}
            </label>
            <div className="flex justify-between items-center">
                <input
                    type={type}
                    name={name}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                    className="w-[500px] px-[15px] py-[10px] my-[5px] rounded-lg border"
                />
                <span
                    className="text-[14px] text-blue-500 cursor-pointer"
                    onClick={() => setDisabled(!disabled)}
                >
                    {disabled ? "Thay Đổi" : "Xác Nhận"}
                </span>
            </div>
        </div>
    );
};

export default FieldForm;
