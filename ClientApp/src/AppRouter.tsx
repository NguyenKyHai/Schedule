import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Schedule from "./pages/schedule"

const AppRouter = () => {
    
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </Router>
        </>
    )
}

export default AppRouter