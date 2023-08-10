const Copyright = () => {
    const date = new Date().getFullYear();

    return (
        <div className="w-main py-[10px] bg-[#0F0F0F] flex justify-between items-center">
            <p className="text-[12px] text-[#b7b7b7] pl-[40px]">
                © {date}, Crodic Crystal Powered by CAME
            </p>
            <a
                href="https://www.facebook.com/bienphatxalice"
                target="_blank"
                className="text-white pr-[40px] flex gap-2 hover:text-red-300 transition-colors duration-200"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                    />
                </svg>
                <span>Nhận Làm Project Đơn Giản</span>
            </a>
        </div>
    );
};

export default Copyright;
