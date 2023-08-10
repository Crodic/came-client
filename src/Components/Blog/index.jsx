import { useEffect, useState } from "react";
import SlideBlog from "./SlideBlog";
import { getAllBlog } from "../../Services/service";
import { useDispatch, useSelector } from "react-redux";
import { StateGetBlogs } from "../../Redux/selector";
import { ErrorAPI, getBlogs } from "../../Redux/SliceReducer/blogReducer";

const BlogContainer = () => {
    const blogList = useSelector(StateGetBlogs);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchAllBlog();
    }, []);

    const fetchAllBlog = async () => {
        try {
            let res = await getAllBlog();
            if (res && res.status === 200) {
                dispatch(getBlogs(res.data.blogs));
            }
        } catch (error) {
            console.log(error);
            dispatch(ErrorAPI("Tải Dữ Liệu Thất Bại"));
        }
    };

    return (
        <div className="mt-[30px]">
            <div className="border-b-2 border-red-500">
                <h2 className="uppercase text-xl font-semibold py-[15px]">
                    BLOG POSTS
                </h2>
            </div>
            <div className="flex mt-[10px] gap-4">
                <SlideBlog data={blogList} />
            </div>
        </div>
    );
};

export default BlogContainer;
