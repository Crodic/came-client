import { navLists } from "./navList";
import ItemMenu from "./ItemMenu";

const Navigation = () => {
    return (
        <section className="w-main h-[48px] py-2 border-y-[1px] flex justify-between items-center">
            <nav className="w-full flex gap-9">
                {navLists.map((item) => {
                    let depthLevel = 0;
                    return (
                        <ItemMenu
                            key={item.key}
                            item={item}
                            depthLevel={depthLevel}
                        />
                    );
                })}
            </nav>
            <div className="flex-1">
                <input type="text" placeholder="Search Figure" />
            </div>
        </section>
    );
};

export default Navigation;
