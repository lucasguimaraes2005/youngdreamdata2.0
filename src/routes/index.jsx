import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { Dashboard } from "../pages/Dashboard"



export const RoutesMain = () => {

    return (
        <>

            <Routes>
                <Route path="/" element={<LoginPage />}></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>

        </>
    )
}