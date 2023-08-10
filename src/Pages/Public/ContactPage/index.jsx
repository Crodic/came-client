import Breakcrumb from "../../../Components/Breakcrumb";
import Logo from "../../../Assets/Images/light.png";
import { createElement } from "react";
import NewsLetter from "../../../Components/NewsLetter";

const contactContent = [
    {
        key: 1,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-red-500"
            >
                <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        title: "Address: 36 Lê Văn Thả, Gò Dầu, Tây Ninh, Việt Nam",
    },
    {
        key: 2,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-red-500"
            >
                <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        title: "Mở Cửa vào lúc: 7:00 - 19:00 các ngày từ Thứ 2 đến Chủ Nhật",
    },
    {
        key: 3,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-red-500"
            >
                <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        title: "Email: alice01422@gmail.com",
    },
    {
        key: 4,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-red-500"
            >
                <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                <path
                    fillRule="evenodd"
                    d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        title: "Phone Number: 0387737544",
    },
];

const ContactPage = () => {
    return (
        <div>
            <div className="bg-[#f7f7f7] py-[20px] px-[10px]">
                <Breakcrumb />
            </div>
            <div className="mt-[20px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.71226921270068!2d106.2629487604316!3d11.083812511586212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b3b50317d5fff%3A0x5cc0d002ba1a5165!2zMzYgTMOqIFbEg24gVGjhuqMsIEfDsiBE4bqndSwgVMOieSBOaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1691112242657!5m2!1svi!2s"
                    className="w-full h-[450px]"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <main className="mt-[30px] flex justify-between items-start gap-5 text-[14px]">
                <ul className="w-[45%]">
                    <li className="mb-[20px] opacity-60">
                        <b className="text-blue-900">Crodic Crystal</b> Nhận Làm
                        Các Đồ Án <b className="text-red-500">FE</b> bằng
                        {"  "}
                        <b className="text-red-500">ReactJS </b>
                        đơn giản. Có thể viết{" "}
                        <b className="text-green-700">
                            API Nodejs + Mongodb
                        </b>{" "}
                        đơn giản, bao gồm các chức năng{" "}
                        <b className="text-red-900">
                            đăng nhập, xác thực, phân quyền, CRUD, mã hoá mật
                            khẩu, JWT, gửi mail xác thực,...
                        </b>
                    </li>
                    {contactContent.map((item) => {
                        return (
                            <li
                                key={item.key}
                                className="flex items-center gap-3"
                            >
                                <span>
                                    {createElement("svg", {
                                        ...item.icon.props,
                                    })}
                                </span>
                                <span className="opacity-60">{item.title}</span>
                            </li>
                        );
                    })}
                    <li className="text-blue-700 opacity-100 mt-[45px] text-2xl">
                        Liên Hệ Qua Facebook:{" "}
                        <a
                            href="https://www.facebook.com/bienphatxalice"
                            target="_blank"
                            className="hover:text-red-500 transition-colors duration-200"
                        >
                            Ordersia Phát
                        </a>
                    </li>
                </ul>
                <div className="w-[30%]">
                    <img src={Logo} alt="" className="w-full" />
                </div>
            </main>
            <NewsLetter />
        </div>
    );
};

export default ContactPage;
