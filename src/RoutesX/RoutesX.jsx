import { useRoutes } from "react-router"
import { Home } from "../Pages"
import { Home as Soat } from "../Soat"
export const RoutesX = () => {
    const route = [
    {
        path: "/home/*",
        element: <Home/>
    },
    {
        path: "/soat/*",
        element: <Soat/>
    }
    ]
    return useRoutes(route)
}