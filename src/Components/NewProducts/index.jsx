import { useEffect, useState } from "react";
import SlideCard from "../SlideCard";
import { getAllCategory, filterProduct } from "../../Services/service";

const NewProducts = () => {
    const [active, setActive] = useState(0);
    const [listNew, setListNew] = useState([]);
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        fetchThreeCategory();
    }, []);

    useEffect(() => {
        const categoryFirstId = listNew ? listNew[0]?._id : undefined;
        if (categoryFirstId !== undefined) {
            handleClick(categoryFirstId, 0);
        }
    }, [listNew]);

    const handleClick = async (id, index) => {
        setActive(index);
        try {
            let res = await filterProduct({ category: id });
            if (res && res.status === 200) {
                setListProduct(res.data.products);
            }
        } catch (error) {}
    };

    const fetchThreeCategory = async () => {
        try {
            let res = await getAllCategory();
            if (res && res.status === 200);
            let listCategory = [];
            res.data.categories.forEach((item, index) => {
                if (index > 2) {
                    return;
                }
                listCategory.push(item);
            });
            setListNew(listCategory);
        } catch (error) {}
    };

    return (
        <div className="mt-[30px]">
            <div className="flex justify-between items-center border-b-2 border-red-700">
                <h2 className="uppercase text-xl font-semibold py-4">
                    New Arrivals
                </h2>
                <ul className="flex gap-3">
                    {listNew &&
                        listNew.length > 0 &&
                        listNew.map((item, index) => {
                            return (
                                <li
                                    onClick={() => handleClick(item._id, index)}
                                    key={item._id}
                                    className={`px-3 cursor-pointer text-[14px] ${
                                        active === index
                                            ? "font-semibold text-red-500"
                                            : ""
                                    }`}
                                >
                                    {item.title}
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div className="mt-[10px]">
                <SlideCard data={listProduct} />
            </div>
        </div>
    );
};

export default NewProducts;
