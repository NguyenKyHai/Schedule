import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Schedule from "./pages/schedule"
import { PrivateRoutes } from "./pages/auth/PrivateRoutes"

const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path='/' element={<Schedule />} />
                        <Route path='/schedule' element={<Schedule />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter