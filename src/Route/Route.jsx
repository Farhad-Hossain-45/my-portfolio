
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Home from '../Page/Home/Home';
import About from '../Page/About/About';
import Contact from '../Page/Contact/Contact';
import Skills from '../Page/Skills/Skills';
import Projects from '../Page/Projects/Projects';

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/skills",
                element: <Skills></Skills>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            }
        ]
    }
])

export default Route;