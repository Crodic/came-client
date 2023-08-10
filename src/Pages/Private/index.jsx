import { Outlet } from "react-router-dom";
import { SidebarWithSearch } from "../../Components/SideBarAdmin";
import NavigationAdmin from "../../Components/NavigationAdmin";

const PrivateLayout = () => {
    return (
        <div className="flex">
            <div className="w-[20%] border">
                <SidebarWithSearch />
            </div>
            <div className="w-[80%] border">
                <NavigationAdmin />
                <Outlet />
            </div>
        </div>
    );
};

export default PrivateLayout;
