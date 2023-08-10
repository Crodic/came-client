import ItemMenu from "../ItemMenu";

const DropDown = ({ subItem, show, depthLevel }) => {
    return (
        <>
            <nav
                className={`absolute ${
                    depthLevel > 0
                        ? "top-[0px] left-[200px] crodic"
                        : "top-[100%] left-0"
                } w-[200px] shadow-xl ${
                    show ? "block" : "hidden"
                } bg-white z-[1000]`}
            >
                <ul>
                    {subItem &&
                        subItem.length > 0 &&
                        subItem.map((item) => {
                            depthLevel = depthLevel + 1;
                            return (
                                <li
                                    key={item.key}
                                    className="py-[10px] hover:bg-[#d4d4d47f]"
                                >
                                    <ItemMenu
                                        item={item}
                                        depthLevel={depthLevel}
                                    />
                                </li>
                            );
                        })}
                </ul>
            </nav>
        </>
    );
};

export default DropDown;
