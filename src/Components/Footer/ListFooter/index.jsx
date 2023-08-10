const ListFooter = ({ data }) => {
    return (
        <ul className="text-white mt-[10px]">
            {data &&
                data.length > 0 &&
                data.map((item) => {
                    return (
                        <li
                            key={item.key}
                            className="py-2 text-[13px] opacity-70 cursor-pointer hover:opacity-100 transition-all duration-150"
                        >
                            {item.title}
                        </li>
                    );
                })}
        </ul>
    );
};

export default ListFooter;
