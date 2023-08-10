const NewsLetter = () => {
    return (
        <div className="bg-red-500 w-full h-[102px] mt-[30px] flex justify-between">
            <div className="w-[40%] text-white flex flex-col justify-center items-start pl-[20px]">
                <h3>SIGN UP TO NEWSLETTER</h3>
                <p>Subscribe now and receive weekly newsletter</p>
            </div>
            <div className="w-[60%] flex justify-center items-center">
                <div className="w-[550px] h-[50px] rounded-3xl flex bg-red-400">
                    <input
                        type="text"
                        className="w-[90%] h-full rounded-3xl bg-red-400 px-[20px] text-white text-[14px]"
                        placeholder="Enter Your Email"
                    />
                    <span className="flex justify-center items-center w-[10%] cursor-pointer text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
