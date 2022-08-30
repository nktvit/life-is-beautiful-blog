import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from "./Footer";

const Layout = () => {
    return (
    <div id="wrapper" className="h-screen">
        <Header />

        <main className="bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100">
            <Outlet />
        </main>

        <Footer />
    </div>
    )
}

export default Layout