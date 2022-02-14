import { Outlet, Link } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";

const Layout = () => {
    return (
        <>
            <MyNavbar />

            <div className="App">
                <header className="App-header">
                    <Outlet />
                </header>
            </div>
        </>
    )
};

export default Layout;