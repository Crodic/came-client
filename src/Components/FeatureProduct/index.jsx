import React from "react";
import CardFeature from "../CardFeature";

const Feature = ({ features }) => {
    return (
        <div className="mt-[30px]">
            <h2 className="uppercase text-xl font-semibold py-[15px] border-b-2 border-red-600">
                FEATURED Products
            </h2>
            <div className="flex justify-between gap-y-5 flex-wrap mt-6">
                {features &&
                    features.length > 0 &&
                    features.map((element) => {
                        return <CardFeature key={element._id} data={element} />;
                    })}
            </div>
        </div>
    );
};

export default React.memo(Feature);
