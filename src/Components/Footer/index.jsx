import ListFooter from "./ListFooter";
import Logo from "../../Assets/Images/dark.png";
import AboutFooter from "./AboutFooter";

const dataInformation = [
    {
        key: 1,
        title: "Typography",
        path: "/",
    },
    {
        key: 2,
        title: "Gallery",
        path: "/",
    },
    {
        key: 3,
        title: "Contact",
        path: "/contact",
    },
    {
        key: 4,
        title: "News Today",
        path: "/",
    },
];

const dataWhoAreYou = [
    {
        key: 1,
        title: "FAQ",
        path: "/faq",
    },
    {
        key: 2,
        title: "Copyright",
        path: "/",
    },
    {
        key: 3,
        title: "Crodic Front End",
        path: "/crodic",
    },
    {
        key: 4,
        title: "Nhận làm project FE",
        path: "/",
    },
];

const dataAbout = [
    {
        key: 1,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
            >
                <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        title: "Address: ",
        type: "address",
        path: null,
        description: "KP1/125B Nội Ô A, Thị Trấn Gò Dầu, Tỉnh Tây Ninh",
    },
    {
        key: 2,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
            >
                <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        title: "Phone: ",
        type: "phone",
        path: "tel:+84387737544",
        description: "(+84) 387737544",
    },
    {
        key: 3,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
            >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
        ),
        title: "Email: ",
        type: "email",
        path: "mailto:alice01422@gmail.com",
        description: "alice01422@gmail.com",
    },
];

const Footer = () => {
    return (
        <div className=" bg-[#191919] text-white w-main flex justify-between items-center py-[50px] px-[40px]">
            <div className="w-[40%]">
                <h3 className="uppercase px-3 py-1 border-l-4 border-red-600 text-[15px]">
                    About Us
                </h3>
                {/* <ul className="mt-[20px] text-[13px] flex flex-col gap-2">
                    <li className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>Address:</span>
                        <span className="ml-[5px] opacity-70">
                            KP1/125B Nội Ô A, Thị Trấn Gò Dầu, Tỉnh Tây Ninh
                        </span>
                    </li>
                    <li className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <span>Phone:</span>
                        <span className="ml-[5px] opacity-70">
                            <a href="tel:+84387737544">(+84) 387737544</a>
                        </span>
                    </li>
                    <li className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                        >
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>

                        <span>Email:</span>
                        <span className="ml-[5px] opacity-70">
                            <a
                                href="mailto:alice01422@gmail.com"
                                target="_blank"
                            >
                                alice01422@gmail.com
                            </a>
                        </span>
                    </li>
                </ul> */}
                <AboutFooter data={dataAbout} />
                <div className="flex items-center gap-4 mt-[10px]">
                    <div className="w-[40px] h-[40px] bg-[#303030] rounded-lg mt-[15px] flex justify-center items-center cursor-pointer">
                        <a
                            href="https://www.facebook.com/crodicxalice"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-facebook"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="w-[40px] h-[40px] bg-[#303030] rounded-lg mt-[15px] flex justify-center items-center cursor-pointer">
                        <a
                            href="http://github.com/crodic"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-instagram"
                            >
                                <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="5"
                                    ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line
                                    x1="17.5"
                                    y1="6.5"
                                    x2="17.51"
                                    y2="6.5"
                                ></line>
                            </svg>
                        </a>
                    </div>
                    <div className="w-[40px] h-[40px] bg-[#303030] rounded-lg mt-[15px] flex justify-center items-center cursor-pointer">
                        <a
                            href="https://github.com/crodic"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-twitter"
                            >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-[20%]">
                <h3 className="uppercase px-3 py-1 border-l-4 border-red-600 text-[15px]">
                    INFORMATION
                </h3>
                <ListFooter data={dataInformation} />
            </div>
            <div className="w-[20%]">
                <h3 className="uppercase px-3 py-1 border-l-4 border-red-600 text-[15px]">
                    WHO WE ARE
                </h3>
                <ListFooter data={dataWhoAreYou} />
            </div>
            <div className="w-[20%]">
                <h3 className="uppercase px-3 py-1">
                    <img src={Logo} alt="" />
                </h3>
            </div>
        </div>
    );
};

export default Footer;
