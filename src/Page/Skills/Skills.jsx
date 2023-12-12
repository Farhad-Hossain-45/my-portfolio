import { Helmet } from "react-helmet-async";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { PiMicrosoftExcelLogoFill, PiMicrosoftWordLogoFill } from "react-icons/pi";
import { SiCanva } from "react-icons/si";
const Skills = () => {
    return (
        <div>
            <Helmet>
                <title>Portfolio | Skills</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <div className="my-10" data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800">
                <h2 className="text-4xl font-bold">Professional Skills</h2>
                <div className="border-2 border-sky-400 w-28 rounded-xl mt-1"></div>
                <div className="border-2 border-sky-400 w-20 rounded-xl mt-1"></div>
                <div className="mt-8">
                    <h2 className="font-semibold text-3xl ">Languages & Frameworks</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-3xl text-[#FF9100]"><ImHtmlFive2></ImHtmlFive2></h2>
                                <h2 className="text-xl font-semibold">HTML</h2>
                            </div>
                            <progress className="progress progress-accent w-96" value="90" max="100"></progress>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-3xl text-[#004CE8]"><FaCss3Alt></FaCss3Alt></h2>
                                <h2 className="text-xl font-semibold">CSS</h2>
                            </div>
                            <progress className="progress progress-accent w-96" value="90" max="100"></progress>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-3xl text-[#FFDF00]"><IoLogoJavascript></IoLogoJavascript></h2>
                                <h2 className="text-xl font-semibold">JAVASCRIPT</h2>
                            </div>
                            <progress className="progress progress-accent w-96" value="85" max="100"></progress>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-3xl text-[#57C1DD]"><FaReact></FaReact></h2>
                                <h2 className="text-xl font-semibold">REACT</h2>
                            </div>
                            <progress className="progress progress-accent w-96" value="90" max="100"></progress>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-3xl text-[#57C1DD]"><SiTailwindcss></SiTailwindcss></h2>
                                <h2 className="text-xl font-semibold">TAILWIND</h2>
                            </div>
                            <progress className="progress progress-accent w-96" value="95" max="100"></progress>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-3xl text-[#4CAB3D]"><DiMongodb></DiMongodb></h2>
                                <h2 className="text-xl font-semibold">MONGODB</h2>
                            </div>
                            <progress className="progress progress-accent w-96" value="75" max="100"></progress>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-3xl text-[#4CAB3D]"><FaNodeJs></FaNodeJs></h2>
                                <h2 className="text-xl font-semibold">NODEJS</h2>
                            </div>
                            <progress className="progress progress-accent w-96" value="70" max="100"></progress>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-3xl text-black"><TbBrandNextjs></TbBrandNextjs></h2>
                                <h2 className="text-xl font-semibold">NEXT JS</h2>
                            </div>
                            <progress className="progress progress-accent w-96" value="65" max="100"></progress>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-4xl font-bold">Others</h2>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-3xl text-[#F76D5E]"><FaFigma></FaFigma></h2>
                                    <h2 className="text-xl font-semibold">FIGMA</h2>
                                </div>
                                <progress className="progress progress-accent w-96" value="75" max="100"></progress>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-3xl text-[#05BCCE]"><SiCanva></SiCanva></h2>
                                    <h2 className="text-xl font-semibold">CANVA</h2>
                                </div>
                                <progress className="progress progress-accent w-96" value="65" max="100"></progress>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-3xl text-[#0B4CB3]"><PiMicrosoftWordLogoFill/></h2>
                                    <h2 className="text-xl font-semibold">MICROSOFT WORD</h2>
                                </div>
                                <progress className="progress progress-accent w-96" value="85" max="100"></progress>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-3xl text-[#06773A]"><PiMicrosoftExcelLogoFill></PiMicrosoftExcelLogoFill></h2>
                                    <h2 className="text-xl font-semibold">MICROSOFT EXCEL</h2>
                                </div>
                                <progress className="progress progress-accent w-96" value="85" max="100"></progress>
                            </div>
                           
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;