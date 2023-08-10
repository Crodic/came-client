import SlideCard from "../SlideCard";

const SimilarProduct = ({ data }) => {
    return (
        <div className="mt-[30px]">
            <div className="py-[5px] border-b-2 border-red-500">
                <h2 className="text-lg font-semibold uppercase">
                    Sản Phẩm Tương Tự
                </h2>
            </div>
            <div className="mt-[10px]">
                <SlideCard view={5} data={data} />
            </div>
        </div>
    );
};

export default SimilarProduct;
