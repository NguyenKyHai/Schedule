import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Schedule from "./pages/schedule"
import { RequireAuth } from "./components/RequireAuth"

const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/"
                        element={
                            <RequireAuth>
                                <Schedule />
                            </RequireAuth>} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter