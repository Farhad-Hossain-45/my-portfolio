import { Helmet } from "react-helmet-async";
import image1 from "../../assets/brnad_shop.png"
import image2 from "../../assets/event_menegment.png"
import image3 from "../../assets/abc forum.png"
import "./Project.css"
import { FaGithub } from "react-icons/fa6";
import { MdEmojiObjects } from "react-icons/md";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div>
            <Helmet>
                <title>Portfolio | Projects</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <div data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800">
                <div className="my-10">
                    <h2 className="font-bold text-4xl">Projects</h2>
                    <div className="border-2 border-sky-400 w-20 rounded-xl mt-1"></div>
                    <div className="border-2 border-sky-400 w-14 rounded-xl mt-1"> </div>
                </div>
                <div className="my-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="card  bg-base-100 shadow-xl">
                            <figure><img src={image1} alt="project" className="h-[200px] rounded-xl card_image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">FOX TECH UNLIMITED | BRAND SHOP</h2>

                                <p>I have created this website based on electronic and technology, with responsive to desktop, tablet and mobile. So that the user can use it very easily from any device.</p>
                                <div className="card-actions mt-">
                                    <Link to="https://github.com/Farhad-Hossain-45/brand-client">
                                        <button className="btn btn-outline btn-accent"><FaGithub className="text-2xl"></FaGithub> Github</button>
                                    </Link>
                                    <Link to="https://tenth-assignment-client.web.app/" target="_blank">
                                        <button className="btn btn-outline btn-accent"><MdEmojiObjects className="text-2xl"></MdEmojiObjects> Demo</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure><img src={image2} alt="project" className="h-[200px] rounded-xl card_image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">WEDDING PLANNER | EVENT MANAGEMENT</h2>

                                <p>I am creating wedding event website, with responsive to desktop, tablet and mobile. So that the user can use it very easily from any device.</p>
                                <div className="card-actions mt-">
                                    <Link to="https://github.com/Farhad-Hossain-45/event-management" target="_blank">
                                        <button className="btn btn-outline btn-accent"><FaGithub className="text-2xl"></FaGithub> Github</button>
                                    </Link>
                                    <Link to="https://ninth-assignment-12921.web.app/" target="_blank">
                                        <button className="btn btn-outline btn-accent"><MdEmojiObjects className="text-2xl"></MdEmojiObjects> Demo</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure><img src={image3} alt="project" className="h-[200px] rounded-xl card_image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">ABC FORUM | FORUM WEBSITE</h2>

                                <p>I have created this website based on ABC FORUM, with responsive to desktop, tablet and mobile. So that the user can use it very easily from any device.</p>
                                <div className="card-actions mt-">
                                    <Link to="https://github.com/Farhad-Hossain-45/ABC-Forum" target="_blank">
                                        <button className="btn btn-outline btn-accent"><FaGithub className="text-2xl"></FaGithub> Github</button>
                                    </Link>
                                    <Link to="https://final-assignment-client.web.app/" target="_blank">
                                        <button className="btn btn-outline btn-accent"><MdEmojiObjects className="text-2xl"></MdEmojiObjects> Demo</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;