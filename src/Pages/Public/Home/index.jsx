import SideBar from "../../../Components/SideBar";
import Banner from "../../../Components/Banner";
import Deal from "../../../Components/Deal";
import { useDispatch, useSelector } from "react-redux";
import { StateDealProduct } from "../../../Redux/selector";
import { useEffect } from "react";
import { fetchDealProduct } from "../../../Redux/SliceReducer/ProductReducer";
import Tabs from "../../../Components/TabsProducts";
import Feature from "../../../Components/FeatureProduct";
import { filterProduct } from "../../../Services/service";
import { useState } from "react";
import CardCollection from "../../../Components/CardCollection";
import Image1 from "../../../Assets/Images/collection1.webp";
import Image2 from "../../../Assets/Images/collection2.webp";
import Image3 from "../../../Assets/Images/collection3.webp";
import Image4 from "../../../Assets/Images/collection4.webp";
import NewProduct from "../../../Components/NewProducts";
import BlogContainer from "../../../Components/Blog";
import NewsLetter from "../../../Components/NewsLetter";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [feature, setFeature] = useState([]);
    const dataDeal = useSelector(StateDealProduct);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDealProduct());
        fetchFeatureProduct();
    }, []);

    const fetchFeatureProduct = async () => {
        try {
            let res = await filterProduct({ sort: "totalRating", limit: 9 });
            if (res && res.status === 200) {
                setFeature(res.data.products);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="w-main flex gap-5 ">
                <div className="flex flex-col gap-5 w-[300px] flex-auto">
                    <SideBar />
                    <Deal data={dataDeal} />
                </div>
                <div className="flex flex-col gap-5 w-[70%] flex-auto">
                    <Banner />
                    <Tabs />
                </div>
            </div>
            <Feature features={feature} />
            <div className="mt-[30px] flex justify-between">
                <div
                    className="w-[580px] h-[665px] border"
                    onClick={() => navigate("/products")}
                >
                    <CardCollection
                        image={Image1}
                        width={100}
                        className="cursor-pointer"
                    />
                </div>
                <div className="w-[280px] h-[665px] flex flex-col gap-8">
                    <div className="w-full h-[338px] border">
                        <CardCollection
                            image={Image2}
                            width={100}
                            className="cursor-pointer"
                        />
                    </div>
                    <div
                        className="w-full h-[296px] border"
                        onClick={() => navigate("/blog")}
                    >
                        <CardCollection
                            image={Image3}
                            width={100}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
                <div
                    className="w-[300px] h-[665px] border"
                    onClick={() => navigate("/blog")}
                >
                    <CardCollection
                        image={Image4}
                        width={100}
                        className="cursor-pointer"
                    />
                </div>
            </div>
            <NewProduct />
            <BlogContainer />
            <NewsLetter />
        </>
    );
};

export default HomePage;
