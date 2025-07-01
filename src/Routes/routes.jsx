import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Faqs } from "../pages/faqs";
import { Home } from "../pages/home";


export const appRouter = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/faqs', element: <Faqs /> },


]