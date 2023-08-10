import { createElement } from "react";

const CardService = ({ service }) => {
    return (
        <div className="flex gap-3 border h-[60px]">
            <div className="w-[30%] flex justify-center items-center">
                <span className="p-2 rounded-[50%] bg-black text-white">
                    {createElement("svg", { ...service?.icon?.props })}
                </span>
            </div>
            <div className="w-[70%] flex flex-col justify-center items-start">
                <p className="text-[14px]">{service.title}</p>
                <p className="text-xs opacity-50">{service.description}</p>
            </div>
        </div>
    );
};

export default CardService;
