import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchProduct } from "../../Redux/SliceReducer/ProductReducer";
import { StateProduct } from "../../Redux/selector";
import Information from "../../Components/Information";
import BreakCrumb from "../../Components/Breakcrumb";
import NewLetter from "../../Components/NewsLetter";
import Tabs from "../../Components/Tabs";
import SimilarProduct from "../../Components/SimilarProduct";
import { filterProduct } from "../../Services/service";

const ProductInformation = () => {
    const [pCategory, setPCategory] = useState([]);
    const { productId } = useParams();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const product = useSelector(StateProduct);

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [pathname]);

    useEffect(() => {
        if (Object.keys(product).length !== 0) {
            fetchProductsByCategory(product.category._id);
        }
    }, [product]);

    const fetchProductsByCategory = async (id) => {
        try {
            let res = await filterProduct({ category: id });
            if (res && res.status === 200) {
                setPCategory(res.data.products);
            }
        } catch (error) {}
    };

    return (
        <div>
            <div className="bg-[#F7F7F7] py-[15px] px-[20px] w-full">
                <h3 className="text-[18px] font-semibold">{product.title}</h3>
                <BreakCrumb title={product.title} />
            </div>
            <Information data={product} />
            <div className="w-full text-center hover:text-red-500 transition-colors duration-200 uppercase">
                <Link to="/">Back To Home Page </Link>
            </div>
            <Tabs />
            <SimilarProduct data={pCategory} />
            <NewLetter />
        </div>
    );
};

export default ProductInformation;
