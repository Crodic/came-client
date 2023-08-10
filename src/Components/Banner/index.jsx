import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Banner1 from "../../Assets/Images/slide1.webp";
import Banner2 from "../../Assets/Images/slide2.webp";
import Banner3 from "../../Assets/Images/slide3.webp";
import Banner4 from "../../Assets/Images/slide4.webp";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className=" flex flex-col gap-2">
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper flex-grow-0"
            >
                <SwiperSlide>
                    <Link to="/blog">
                        <img
                            src={Banner1}
                            alt="Figure Store"
                            className="object-cover"
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/blog">
                        <img
                            src={Banner2}
                            alt="Figure Store"
                            className="object-cover"
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/blog">
                        <img
                            src={Banner3}
                            alt="Figure Store"
                            className="object-cover"
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/blog">
                        <img
                            src={Banner4}
                            alt="Figure Store"
                            className="object-contain"
                        />
                    </Link>
                </SwiperSlide>
            </Swiper>
            <div className="flex-auto px-3 pb-2">
                <h2>
                    <span className="uppercase font-bold text-red-300">
                        Figure Store
                    </span>
                    , phương châm{" "}
                    <span className="text-red-500 font-bold">
                        "CHẤT LƯỢNG HƠN SỐ LƯỢNG"
                    </span>
                    , đảm bảo là hàng chính hàng có giấy xác nhận. Những phiên
                    bản Figure Limited sẽ được cấp giấy chứng từ và bảo hành
                    trong vòng 3 năm. Để biết thêm chi tiết vui lòng xem{" "}
                    <Link
                        to="/contact"
                        className="text-blue-400 hover:text-blue-600 hover:underline"
                    >
                        Tại Đây
                    </Link>
                </h2>
            </div>
        </div>
    );
};

export default Banner;
