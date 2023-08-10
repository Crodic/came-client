import Breakcrumb from "../../../Components/Breakcrumb";
import {
    startTransition,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import {
    filterProduct,
    getAllBrand,
    getAllCategory,
} from "../../../Services/service";
import CardProduct from "../../../Components/CardProduct";
import Paginate from "../../../Components/Paginate";
import NewsLetter from "../../../Components/NewsLetter";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
    const [searchParams] = useSearchParams();
    const queryBrand = searchParams.get("brand");
    const queryCategory = searchParams.get("category");
    const submitRef = useRef(null);

    const [listCategory, setListCategory] = useState([]);
    const [sort, setSort] = useState("");
    const [brand, setBrand] = useState(queryBrand || "");
    const [category, setCategory] = useState(queryCategory || "");
    const [listBrands, setListBrands] = useState([]);
    const [page, setPage] = useState(1);
    const [listProduct, setListProduct] = useState({
        list: [],
        totalPage: 1,
    });

    const handleSetPage = useCallback((number) => {
        setPage(number);
    }, []);

    useEffect(() => {
        fetchAllCategory();
        fetchAllBrand();
    }, []);

    useEffect(() => {
        fetchAllProduct(
            page,
            sort === "" ? null : sort,
            category === "" ? null : category,
            brand === "" ? null : brand
        );
    }, [page]);

    useEffect(() => {
        if (submitRef.current) {
            submitRef.current.click();
        }
    }, [submitRef]);

    const fetchAllBrand = async () => {
        try {
            let res = await getAllBrand();
            if (res && res.status === 200) {
                setListBrands(res.data.brands);
            }
        } catch (error) {}
    };

    const fetchAllProduct = async (page, sort, category, brand) => {
        try {
            const data = { page, sort, category, brand };
            if (data.category === null) {
                delete data.category;
            }
            if (data.brand === null) {
                delete data.brand;
            }
            if (data.sort === null) {
                delete data.sort;
            }
            let res = await filterProduct(data);
            if (res && res.status === 200) {
                setListProduct({
                    list: res.data.products,
                    totalPage: res.data.total_page,
                });
                setPage(res.data.page);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchAllCategory = async () => {
        try {
            let res = await getAllCategory();
            if (res && res.status === 200) {
                setListCategory(res.data.categories);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchFilterProduct = async (data) => {
        try {
            let res = await filterProduct(data);
            if (res && res.status === 200) {
                setListProduct({
                    list: res.data.products,
                    totalPage: res.data.total_page,
                });
                setPage(res.data.page);
            }
        } catch (error) {}
    };

    const handleSubmit = (e) => {
        setPage(1);
        e.preventDefault();
        const data = {
            sort,
            category,
            brand,
        };
        if (sort.length === 0) {
            delete data.sort;
        }
        if (category.length === 0) {
            delete data.category;
        }
        if (brand.length === 0) {
            delete data.brand;
        }
        fetchFilterProduct(data);
    };

    const handleClear = () => {
        setCategory("");
        setBrand("");
        setSort("");
        fetchAllProduct(page, null, null, null);
    };

    return (
        <main>
            <div className="bg-[#F7F7F7] py-[15px] px-[10px]">
                <h2 className="text-lg font-semibold uppercase pl-[10px]">
                    Figure
                </h2>
                <Breakcrumb />
            </div>
            <div className="border p-[15px] max-w-full mt-[30px]">
                <h3 className="mb-[10px]">Filter By </h3>
                <form
                    className="flex item-center gap-3 text-[14px]"
                    onSubmit={handleSubmit}
                >
                    <div className="h-[70px]">
                        <label className="mb-[5px] inline-block">
                            Theo Giá Tiền
                        </label>
                        <select
                            className="w-full h-[45px] border"
                            name="sort"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value="">Mặc Định</option>
                            <option value="-price">Từ Cao Đến Thấp</option>
                            <option value="price">Từ Thấp Đến Cao</option>
                        </select>
                    </div>
                    <div className=" h-[70px]">
                        <label className="mb-[5px] inline-block">
                            Theo Danh Mục
                        </label>
                        <select
                            value={category}
                            name="category"
                            className="w-full h-[45px] border"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Tất Cả</option>
                            {listCategory.map((category) => {
                                return (
                                    <option
                                        key={category._id}
                                        value={category._id}
                                    >
                                        {category.title}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="h-[70px]">
                        <label className="mb-[5px] inline-block">
                            Theo Nhà Sản Xuất
                        </label>
                        <select
                            value={brand}
                            name="brand"
                            className="w-full h-[45px] border"
                            onChange={(e) => setBrand(e.target.value)}
                        >
                            <option value="">Tất Cả</option>
                            {listBrands.map((brand) => {
                                <option value="">Nhà Sản Xuất</option>;
                                return (
                                    <option key={brand._id} value={brand._id}>
                                        {brand.title}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="h-[45px] mt-[26px]">
                        <button
                            ref={submitRef}
                            type="submit"
                            className="w-full h-full border py-[5px] px-[10px] bg-red-500 rounded-md text-white hover:bg-red-700 hover:text-black transition-colors duration-200"
                        >
                            Lọc Sản Phẩm
                        </button>
                    </div>
                </form>
                {(sort !== "" || category !== "" || brand !== "") && (
                    <p
                        className="text-[14px] mt-[5px] text-red-500 hover:underline cursor-pointer"
                        onClick={handleClear}
                    >
                        Bỏ tất cả tuỳ chọn
                    </p>
                )}
            </div>
            <div className="flex flex-wrap gap-3 my-[30px] border p-[10px]">
                {listProduct?.list.length <= 0 ? (
                    <div className="w-full min-h-[450px] flex justify-center items-center">
                        Không Có Sản Phẩm
                    </div>
                ) : (
                    listProduct.list.map((product) => {
                        return (
                            <div key={product._id} className="w-[290px]">
                                <CardProduct data={product} />
                            </div>
                        );
                    })
                )}
            </div>
            <div>
                <Paginate
                    total={listProduct.totalPage}
                    pageChange={handleSetPage}
                    page={page}
                />
            </div>
            <NewsLetter />
        </main>
    );
};

export default ProductPage;
