import "./style.scss";

const Quantity = ({ maxCount = 5, quantity, setQuantity }) => {
    const handleClick = (state) => {
        if (state === "-") {
            if (quantity < 2) {
                return;
            }
            setQuantity((prevCount) => prevCount - 1);
        }
        if (state === "+") {
            if (quantity + 1 > maxCount) {
                return;
            }
            setQuantity((prevCount) => prevCount + 1);
        }
    };

    return (
        <div className="flex w-[20px] justify-center items-center">
            <div
                className="w-full border-r-black px-[15px] flex justify-center items-center h-[30px] border cursor-pointer select-none bg-blue-gray-100"
                onClick={() => handleClick("-")}
            >
                -
            </div>
            <input
                type="number"
                value={quantity}
                onChange={(e) => {
                    if (e.target.value > maxCount) {
                        setQuantity(maxCount);
                    } else {
                        setQuantity(e.target.value);
                    }
                }}
                max={maxCount}
                min={1}
                className="w-[50px] h-[30px] flex justify-center items-center border bg-blue-gray-100 text-center"
            />
            <div
                className="w-full border-l-black px-[15px] flex justify-center items-center h-[30px] border cursor-pointer select-none bg-blue-gray-100"
                onClick={() => handleClick("+")}
            >
                +
            </div>
        </div>
    );
};

export default Quantity;
