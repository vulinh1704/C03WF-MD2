import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

export function Home() {
    return (
        <>
            <div className="container">
                <NavBar />
                <SideBar/>
                <Outlet />
                <Footer />
            </div>
        </>
    )
}