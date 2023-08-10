import { createElement } from "react";

const AboutFooter = ({ data }) => {
    return (
        <ul className="mt-[20px] text-[13px] flex flex-col gap-2">
            {data &&
                data.length > 0 &&
                data.map((item) => {
                    return (
                        <li key={item.key} className="flex items-center gap-1">
                            {createElement("svg", { ...item.icon.props })}
                            <span>{item.title}</span>
                            {item.path ? (
                                <span className="ml-[5px] opacity-70">
                                    <a
                                        href={item.path}
                                        target={
                                            item.type === "email"
                                                ? "_blank"
                                                : ""
                                        }
                                    >
                                        {item.description}
                                    </a>
                                </span>
                            ) : (
                                <span className="ml-[5px] opacity-70">
                                    {item.description}
                                </span>
                            )}
                        </li>
                    );
                })}
        </ul>
    );
};

export default AboutFooter;
