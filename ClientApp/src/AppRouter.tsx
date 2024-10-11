import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Schedule from "./pages/schedule"
import { PrivateRoutes } from "./pages/auth/PrivateRoutes"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import PersistentDrawerLeft from "./components/PersistentDrawerLeft"
import ProductCardComponent from "./components/Cart"
import Equipment from "./pages/equipment"

const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route element={<PrivateRoutes />}>
                        <Route path='/' element={<Header />} />
                        <Route path='/schedule' element={<Header />} />
                    </Route> */}
                     <Route path="/" element={<Header />} />
                     <Route path="/cart" element={<ProductCardComponent />} />
                     <Route path="/side" element={<PersistentDrawerLeft />} />
                     <Route path="/equipment" element={<Equipment />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter