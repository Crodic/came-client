import { Link, useNavigate, useParams } from "react-router-dom";
import BreakCrumb from "../../../Components/Breakcrumb";
import { useEffect, useState } from "react";
import { getDetailBlog } from "../../../Services/service";
import { useSelector } from "react-redux";
import { StateAuthUser, StateUser } from "../../../Redux/selector";
import { disLikeBlog, likeBlog } from "../../../Services/authService";
import { toast } from "react-toastify";
import NewsLetter from "../../../Components/NewsLetter";

const BlogDetail = () => {
    const [blog, setBlog] = useState({});
    const [viewLike, setViewLike] = useState(0);
    const [like, setLike] = useState(false);
    const [disLike, setDisLike] = useState(false);
    const { bid } = useParams();
    const auth = useSelector(StateAuthUser);
    const userAuth = useSelector(StateUser);
    const navigate = useNavigate();

    let arrayDescription = [];

    if (Object.keys(blog).length > 0) {
        arrayDescription = blog.description.split("\n\n").map((item) => {
            return item;
        });
    }

    useEffect(() => {
        fetchBlogDetail(bid);
        if (window.scrollY > 200) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [bid]);

    const fetchBlogDetail = async (bid) => {
        try {
            let res = await getDetailBlog(bid);
            if (res && res.status === 200) {
                setBlog(res.data.blog);
                setViewLike(res.data.blog.likes.length);
                if (auth) {
                    setLike(
                        res.data.blog.likes.some(
                            (user) => user._id === userAuth._id
                        )
                    );
                    setDisLike(
                        res.data.blog.disLikes.some(
                            (user) => user._id === userAuth._id
                        )
                    );
                }
            }
        } catch (error) {
            console.log(error);
            navigate("*");
        }
    };

    const handleUnLike = async () => {
        try {
            let res = await disLikeBlog(bid);
            if (res && res.status === 200) {
                setViewLike(res.data.result.likes.length);
                if (!disLike) {
                    if (!like) {
                        setDisLike(true);
                    }
                    setLike(false);
                } else {
                    if (like) {
                        setLike(false);
                    }
                    setDisLike(false);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(
                "Có Lỗi Trong Quá Trình Dis Like. Vui Lòng Thử Lại Sau Vài Phút"
            );
        }
    };

    const handleLike = async () => {
        try {
            let res = await likeBlog(bid);
            if (res && res.status === 200) {
                setViewLike(res.data.result.likes.length);
                if (!like) {
                    if (!disLike) {
                        setLike(true);
                    }
                    setDisLike(false);
                } else {
                    if (disLike) {
                        setDisLike(false);
                    }
                    setLike(false);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(
                "Có Lỗi Trong Quá Trình Like. Vui Lòng Thử Lại Sau Vài Phút"
            );
        }
    };

    return (
        <main>
            <div className="py-[15px] px-[10px] bg-[#f7f7f7]">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <BreakCrumb title={blog.title} />
            </div>
            <ul className="flex list-disc gap-[50px] ml-[20px] opacity-50 my-[20px]">
                <li>Được Đăng Vào: {blog?.createdAt?.split("T")[0]}</li>
                <li>Lượt Xem: {blog?.view}</li>
            </ul>
            <div className="w-full mb-[20px]">
                <img src={blog.images} alt="" className="w-full" />
            </div>
            <div>
                {arrayDescription &&
                    arrayDescription.length > 0 &&
                    arrayDescription.map((item, index) => {
                        return (
                            <p
                                key={index}
                                className="my-[10px] text-sm opacity-50"
                            >
                                {item}
                            </p>
                        );
                    })}
            </div>
            <div className="flex justify-between items-center">
                <div className="text-sm flex gap-2">
                    <button
                        className={`p-[5px] border flex gap-2 items-center ${
                            auth
                                ? "bg-blue-400 text-white hover:shadow-xl"
                                : "text-black select-none"
                        }`}
                        onClick={handleLike}
                        disabled={auth ? false : true}
                    >
                        <span>
                            {like ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-4 h-4 text-red-500"
                                >
                                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                    />
                                </svg>
                            )}
                        </span>
                        <span>{like ? "Đã Thích" : "Thích"}</span>
                    </button>
                    <button
                        className={`p-[5px] border flex gap-2 items-center ${
                            auth
                                ? "bg-blue-400 text-white hover:shadow-xl"
                                : "text-black select-none"
                        }`}
                        disabled={auth ? false : true}
                        onClick={handleUnLike}
                    >
                        <span>
                            {disLike ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-4 h-4 text-red-500"
                                >
                                    <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                    />
                                </svg>
                            )}
                        </span>
                        <span>
                            {disLike ? "Bạn Không Thích" : "Không Thích"}
                        </span>
                    </button>
                </div>
                <div>
                    <span>Lượt Thích: </span>
                    <span>{viewLike}</span>
                </div>
            </div>
            <div className="my-[30px]">
                <Link
                    to="/blog"
                    className="flex items-center gap-2 justify-end text-sm opacity-70 uppercase hover:text-red-800 transition-colors duration-200"
                >
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            />
                        </svg>
                    </span>
                    <span>Back To Blog Page</span>
                </Link>
            </div>
            <NewsLetter />
        </main>
    );
};

export default BlogDetail;
