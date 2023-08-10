import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";
import BlogCard from "../BlogCard";

export default function SlideCard({ data }) {
    return (
        <>
            <Swiper
                slidesPerView={3}
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
                    data.map((blog) => {
                        return (
                            <SwiperSlide key={blog._id}>
                                <BlogCard blog={blog} />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </>
    );
}
