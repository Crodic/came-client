import { useEffect, useState } from "react";
import { filterProduct, getAllBrand } from "../../Services/service";
import Content1 from "../../Assets/Images/Content1.webp";
import Content2 from "../../Assets/Images/Content2.webp";
import SlideCard from "../SlideCard";
import CardCollection from "../CardCollection";

const Tabs = () => {
    const [brands, setBrands] = useState([]);
    const [active, setActive] = useState(0);
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        fetchBrand();
    }, []);

    useEffect(() => {
        const brandFirstId = brands ? brands[0]?._id : undefined;
        if (brandFirstId !== undefined) {
            fetchProductByBrand(brandFirstId, 0);
        }
    }, [brands]);

    const fetchBrand = async () => {
        try {
            let res = await getAllBrand();
            if (res && res.status === 200) {
                setBrands(res.data.brands);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchProductByBrand = async (id, index) => {
        setActive(index);
        try {
            let res = await filterProduct({ brand: id });
            if (res && res.status === 200) {
                setListProduct(res.data.products);
            }
        } catch (error) {}
    };
    return (
        <div>
            <ul className="h-10 border-b-2 border-red-600 flex justify-start items-center gap-3">
                {brands &&
                    brands.length > 0 &&
                    brands.map((brand, index) => {
                        return (
                            <li
                                key={brand._id}
                                className={`text-xl flex justify-center items-center font-semibold p-3 uppercase cursor-pointer ${
                                    active === index
                                        ? "opacity-100"
                                        : "opacity-50"
                                }`}
                                onClick={() =>
                                    fetchProductByBrand(brand._id, index)
                                }
                            >
                                {brand.title}
                                <div className="ml-5 border h-5"></div>
                            </li>
                        );
                    })}
            </ul>
            <div className="mt-[20px]">
                <SlideCard data={listProduct} />
            </div>
            <div className="flex gap-4 mt-2 h-[95px]">
                <CardCollection
                    image={Content1}
                    className={"flex-auto cursor-pointer"}
                    width={50}
                />
                <CardCollection
                    image={Content2}
                    className={"flex-auto cursor-pointer"}
                    width={50}
                />
            </div>
        </div>
    );
};

export default Tabs;
