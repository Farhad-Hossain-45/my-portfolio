import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Banner from "./Banner/Banner";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Portfolio | Home</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;