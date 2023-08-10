import { Link } from "react-router-dom";

const CardBlog = ({ blog }) => {
    return (
        <div className="flex justify-center items-start max-h-[310px] pb-[20px] gap-3 mb-[30px]">
            <div className="w-[50%]">
                <img
                    src={blog.images}
                    alt={blog.images}
                    className="w-full h-[300px] object-cover"
                />
            </div>
            <div className="w-[50%]">
                <h2 className="text-lg font-semibold uppercase mb-[5px] hover:text-red-500 transition-colors duration-150">
                    <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                </h2>
                <div className="text-[13px] font-normal flex justify-start gap-2 items-center opacity-40">
                    <div className="flex gap-1 items-center">
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
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                            />
                        </svg>
                        <div>{blog.createdAt.split("T")[0]}</div>
                    </div>
                    <div className="flex gap-1 items-center">
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
                                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                            />
                        </svg>

                        <p>View: {blog.view}</p>
                    </div>
                </div>
                <div className="mt-[15px] opacity-50 line-clamp-5 text-left text-[14px]">
                    {blog.description}
                </div>
                <div className="mt-[20px]">
                    <Link
                        to={`/blog/${blog._id}`}
                        className="text-sm text-red-500 hover:text-black transition-colors duration-150 flex gap-2"
                    >
                        <span>Xem Thêm</span>
                        <span>
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
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardBlog;
