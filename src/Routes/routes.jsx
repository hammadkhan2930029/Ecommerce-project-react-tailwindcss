import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Faqs } from "../pages/faqs";
import { Home } from "../pages/home";
import { Services } from "../pages/services";
import { ServicesDetailPage } from "../pages/servicesDetailPage";


export const appRouter = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/faqs', element: <Faqs /> },
    { path: '/services', element: <Services/> },
    { path: '/servicesDetails', element: <ServicesDetailPage/> },




]