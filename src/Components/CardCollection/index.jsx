import "./style.scss";

const CardCollection = ({ image, width, className = "", ...props }) => {
    return (
        <>
            <div
                className={`card__banner w-[${width}%] ${className} h-full`}
                {...props}
            >
                <img src={image} alt="" className="w-full h-full" />
            </div>
        </>
    );
};

export default CardCollection;
