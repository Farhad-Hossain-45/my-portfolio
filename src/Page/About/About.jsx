import { Helmet } from "react-helmet-async";
import image from '../../assets/iamg.jpg'




const About = () => {
    return (
        <div>
            <Helmet>
                <title>Portfolio | About</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <div className="my-8">
                <h1 className="text-4xl font-bold ">About Me</h1>
                <div className="border-2 border-sky-400 w-20 rounded-xl mt-1"></div>
                <div className="border-2 border-sky-400 w-14 rounded-xl mt-1"> </div>
                <div>
                    <h2 className="text-3xl font-bold mt-6">I am Farhad <span className="text-sky-400 underline">Hossain</span></h2>
                </div>
                <p className="mt-3">As a web developer and designer, I am passionate about crafting visually stunning and user-friendly websites that leave a lasting impression. I approach each project with a proactive mindset, eagerly embracing challenges as opportunities for growth. With a keen eye for detail and a commitment to delivering exceptional results, I strive for excellence in every aspect of my work. Collaborative by nature, I value effective communication and thrive in team environments, where I can contribute my innovative ideas and actively contribute to the success of the project. With a dedication to staying updated with the latest trends and technologies, I am driven by a constant thirst for knowledge, always seeking to expand my skill set and push the boundaries of my creativity.</p>
                <div className="mt-10">
                    <div className="card-side bg-base-100  md:flex items-center flex-row-reverse justify-center">
                        <div><img src={image} className='w-[300px] h-[300px] rounded-full border-sky-400 border-4 md:ml-0 ml-10  banner-image' alt="banner_image" /></div>
                        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-right"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="800">
                            <p><span className="text-xl font-semibold">Birthday :</span> 5th September 2000 <div className="border-b-2 border-sky-400 w-80 mt-2"></div></p>
                            <p><span className="text-xl font-semibold">Age :</span> 23 Years <div className="border-b-2 border-sky-400 w-80 mt-2"></div></p>
                            <p><span className="text-xl font-semibold">Email :</span> mrfarhadhossain45@gmail.com<div className="border-b-2 border-sky-400 w-80 mt-2"></div></p>
                            <p><span className="text-xl font-semibold">Phone :</span> +8801865189601<div className="border-b-2 border-sky-400 w-80 mt-2"></div></p>
                            <p><span className="text-xl font-semibold">City :</span> Chandpur, Bangladesh<div className="border-b-2 border-sky-400 w-80 mt-2"></div></p>
                            <p><span className="text-xl font-semibold">Occupation :</span> Student<div className="border-b-2 border-sky-400 w-80 mt-2"></div></p>




                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl font-bold">Education</h2>
                    <div className="border-2 border-sky-400 w-20 rounded-xl mt-1"></div>
                    <div className="border-2 border-sky-400 w-14 rounded-xl mt-1"> </div>
                    <div className="mt-6 ">
                        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                            <li>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start md:text-end mb-10">
                                    <time className="font-mono ">2023 - Present</time>
                                    <div className="text-lg font-black">Honours Final Year(National University)</div>
                                    Chandpur, Bangladesh
                                </div>
                                <hr />
                            </li>

                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start md:text-end mb-10">
                                    <time className="font-mono ">2018 to 2016</time>
                                    <div className="text-lg font-black">Higher Secondary Certificate - 2018 (Science)</div>
                                    Hajigonj degree College
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start md:text-end mb-10">
                                    <time className="font-mono">2014 to 2016</time>
                                    <div className="text-lg font-black">Secondary School Certificate - 2016 (Science)</div>
                                    Rahimanagar B.A.B High School
                                </div>
                                <hr />
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;