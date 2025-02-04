import { Outlet } from "react-router";
import Sidebar from "./../components/Sidebar";

const RootLayout = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-4">
                    {<Outlet />}
                </main>
            </div>
        </>
    );
};

export default RootLayout;
