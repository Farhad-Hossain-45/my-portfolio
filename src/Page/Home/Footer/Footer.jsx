import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <Link to="/about" className="link link-hover text-sky-400 text-lg">About us</Link >
                    <Link to="/contact" className="link link-hover text-sky-400 text-lg">Contact</Link>
                    <Link to="/skills" className="link link-hover text-sky-400 text-lg">Skills</Link>
                    <Link to="/projects" className="link link-hover text-sky-400 text-lg">Projects</Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://www.facebook.com/farhadahmed45/" target='_blank'>
                            <FaFacebookSquare className='text-4xl text-sky-500 rounded-full'></FaFacebookSquare>
                        </Link>
                        <Link to="https://www.instagram.com/__farhad_ahmed_/" target='_blank'>
                            <FaInstagram className='text-4xl text-sky-500 rounded-full'></FaInstagram>
                        </Link>
                        <Link to="https://www.linkedin.com/in/farhad-hossain-87b74a2a4/" target='_blank'>
                            <FaLinkedin className='text-4xl text-sky-500 rounded-full'></FaLinkedin>
                        </Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by Personal Portfolio</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;