import { useSelector } from "react-redux";
import BreakCrumb from "../../../Components/Breakcrumb";
import { StateGetBlogs } from "../../../Redux/selector";
import CardBlog from "../../../Components/CardBlog";
import { Link } from "react-router-dom";
import Collection from "../../../Assets/Images/collection1.webp";
import NewsLetter from "../../../Components/NewsLetter";

const BlogPage = () => {
    const blogList = useSelector(StateGetBlogs);
    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="bg-[#f7f7f7] py-[15px] px-[10px]">
                    <BreakCrumb />
                </div>
                <section className="flex justify-between items-start gap-5">
                    <main className="w-[70%]">
                        {blogList?.map((blog) => {
                            return <CardBlog blog={blog} key={blog._id} />;
                        })}
                    </main>
                    <aside className="w-[30%] flex flex-col gap-4 justify-start items-start">
                        <div className="w-[90%]">
                            <h2 className="bg-red-500 text-white uppercase py-[14px] px-[15px] text-lg font-semibold">
                                RECENT ARTICLES
                            </h2>
                            <div className="border w-full p-5">
                                {blogList &&
                                    blogList.length > 0 &&
                                    blogList.map((blog, index) => {
                                        if (index > 2) {
                                            return;
                                        }
                                        return (
                                            <div
                                                key={blog._id}
                                                className="mb-[10px]"
                                            >
                                                <h4 className="text-sm font-medium hover:text-red-500 transition-colors duration-200 mb-[5px]">
                                                    <Link
                                                        to={`/blog/${blog._id}`}
                                                    >
                                                        {blog.title}
                                                    </Link>
                                                </h4>
                                                <p className="text-[13px] opacity-50">
                                                    {
                                                        blog.createdAt.split(
                                                            "T"
                                                        )[0]
                                                    }
                                                </p>
                                            </div>
                                        );
                                    })}
                            </div>

                            <div className="w-full mt-[30px]">
                                <Link to="/products">
                                    <img src={Collection} alt="" />
                                </Link>
                            </div>
                        </div>
                    </aside>
                </section>
                <NewsLetter />
            </div>
        </>
    );
};

export default BlogPage;
