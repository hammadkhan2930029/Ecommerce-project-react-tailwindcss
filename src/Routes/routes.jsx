import { About } from "../pages/about";
import { Home } from "../pages/home";

export const appRouter = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> }
]