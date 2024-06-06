import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../../pages/home.page"
import { LoginPage } from "../../pages/login.page"
import { RegisterPage } from "../../pages/register.page"
import { DashboardComponent } from "../../components"

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route  path="/" element={<HomePage/>}/>
            <Route  path="/login" element={<LoginPage/>}/>
            <Route  path="/register" element={<RegisterPage/>}/>
            <Route  path="/dashboard" element={<DashboardComponent/>}/>
        </Routes>
        </BrowserRouter>
    )
}