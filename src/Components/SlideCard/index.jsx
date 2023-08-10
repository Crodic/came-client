import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import CardProduct from "../CardProduct";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

export default function SlideCard({ data, view = 3 }) {
    return (
        <>
            <Swiper
                slidesPerView={view}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                className="mySwiper"
            >
                {data &&
                    data.length > 0 &&
                    data.map((product) => {
                        return (
                            <SwiperSlide key={product._id}>
                                <CardProduct data={product} />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </>
    );
}
