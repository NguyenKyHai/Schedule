import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Schedule from "./pages/schedule"
import { PrivateRoutes } from "./pages/auth/PrivateRoutes"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import PersistentDrawerLeft from "./components/Layout"
import ProductCardComponent from "./components/Card"
import Equipment from "./pages/equipment"
import Layout from "./components/Layout"
import MyComponent from "./components/MyComponent"

const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route element={<PrivateRoutes />}>
                        <Route path='/' element={<Header />} />
                        <Route path='/schedule' element={<Header />} />
                    </Route> */}
                     <Route path="/*" element={<Layout />} />
                     <Route path="/header" element={<MyComponent />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter