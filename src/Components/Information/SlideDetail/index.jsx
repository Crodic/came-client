// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.scss";
import { useSelector } from "react-redux";
import { StateProduct } from "../../../Redux/selector";

export default function SlideDetail() {
    const { images } = useSelector(StateProduct);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    if (images?.length > 0) {
        return (
            <>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    loop={true}
                    thumbs={{
                        swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed
                                ? thumbsSwiper
                                : null,
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {images?.map((img, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={img} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper mt-[10px]"
                >
                    {images?.map((img, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={img} alt="" />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </>
        );
    } else {
        return <></>;
    }
}
