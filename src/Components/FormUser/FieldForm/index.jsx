import { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from "@material-tailwind/react";
import { toast } from "react-toastify";

const FieldForm = ({ value, label, name, type, onChange }) => {
    const [disabled, setDisabled] = useState(true);
    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reNewPassword, setReNewPassword] = useState("");

    const handleOpen = () => setOpen(!open);
    const handleClose = () => {
        setPassword("");
        setNewPassword("");
        setReNewPassword("");
        setOpen(!open);
    };

    const handleChangePassword = () => {
        if (
            password.length === 0 ||
            newPassword.length === 0 ||
            reNewPassword.length === 0
        ) {
            toast.error("Các trường không được để trống");
        } else {
            toast.success(
                "Chức năng đang trong quá trình thực hiện. Vui Lòng Đợi Sau"
            );
        }
        setOpen(!open);
    };
    return type === "password" ? (
        <>
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
                        onClick={handleOpen}
                    >
                        Thay Đổi
                    </span>
                </div>
            </div>
            <Dialog open={open} handler={handleOpen}>
                <div className="flex items-center justify-between">
                    <DialogHeader>Đổi Mật Khẩu</DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                        onClick={handleOpen}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <DialogBody divider>
                    <div className="grid gap-6">
                        <Input
                            label="Mật Khẩu Hiện Tại"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Input
                            label="Mật Khẩu Mới"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <Input
                            label="Xác Nhận Lại Mật Khẩu"
                            value={reNewPassword}
                            onChange={(e) => setReNewPassword(e.target.value)}
                        />
                    </div>
                </DialogBody>
                <DialogFooter className="space-x-2">
                    <Button
                        variant="outlined"
                        color="red"
                        onClick={handleClose}
                    >
                        Huỷ Bỏ
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={handleChangePassword}
                    >
                        Xác Nhận
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    ) : (
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
                    className={`w-[500px] px-[15px] py-[10px] my-[5px] rounded-lg ${
                        disabled ? "border" : "border-green-500 border-[2px]"
                    }`}
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
