import { Helmet } from "react-helmet-async";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import './Contact.css'
import { FaFacebook, FaLinkedin } from "react-icons/fa";


const Contact = () => {
    const handleContact = e =>{
            e.preventDefault()
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const subject = form.subject.value;
            const message = form.message.value;
            const filedValue = {name,email,subject,message}
            
            console.log(filedValue)
    }
    return (
        <div>
            <Helmet>
                <title>Portfolio | Contact</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <div className="my-10" data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800">
                <h2 className="font-bold text-4xl">Get in touch with me</h2>
                <div className="border-2 border-sky-400 w-20 rounded-xl mt-1"></div>
                <div className="border-2 border-sky-400 w-14 rounded-xl mt-1"> </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
                    <div className="mt-5 border-sky-400 border p-6 rounded-2xl contact_card">
                        <p className="flex justify-center text-sky-400 text-3xl"><IoCall></IoCall></p>
                        <p className="text-center my-1.5 text-lg font-semibold">Phone/whatsapp</p>
                        <Link to="https://wa.me/+8801865189601" target="_blank">
                            <p className="text-center text-sky-400">+8801865189601</p>
                        </Link>
                    </div>
                    <div className="mt-5 border-sky-400 border p-6 rounded-2xl contact_card">
                        <p className="flex justify-center text-sky-400 text-3xl"><MdEmail></MdEmail></p>
                        <p className="text-center my-1.5 text-lg font-semibold">Email</p>
                        <Link to="" >
                            <p className="text-center text-sky-400">mrfarhadhossain45@gmail.com</p>
                        </Link>
                    </div>
                    <div className="mt-5 border-sky-400 border p-6 rounded-2xl contact_card">
                        <p className="flex justify-center text-sky-400 text-3xl"><FaLinkedin></FaLinkedin></p>
                        <p className="text-center my-1.5 text-lg font-semibold">LinkedIn</p>
                        <Link to="https://www.linkedin.com/in/farhad-hossain-87b74a2a4/" target="_blank">
                            <p className="text-center text-sky-400">Farhad Hossain</p>
                        </Link>
                    </div>
                    <div className="mt-5 border-sky-400 border p-6 rounded-2xl contact_card">
                        <p className="flex justify-center text-sky-400 text-3xl"><FaFacebook></FaFacebook></p>
                        <p className="text-center my-1.5 text-lg font-semibold" >Facebook</p>
                        <Link to="https://www.facebook.com/farhadahmed45/" target="_blank" >
                            <p className="text-center text-sky-400">Farhad_Hossain</p>
                        </Link>
                    </div>
                </div>
                <div className="mt-10">
                    <form onSubmit={handleContact}>
                        <div className="md:flex  gap-10">
                            <div>
                                <label className="form-control ">

                                    <input type="text" placeholder="Name*" name="name" required className="input input-bordered md:w-96 w-full rounded-full" />

                                </label>
                            </div>
                            <div className="mt-3 md:mt-0">
                                <label className="form-control">

                                    <input type="text" placeholder="Email*" name="email" required className="input input-bordered w-full md:w-96 rounded-full" />

                                </label>
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className="form-control">

                                <input type="text" placeholder="Subject*" name="subject" required className="input input-bordered w-full md:w-[810px] rounded-full" />

                            </label>
                        </div>
                        <div className="mt-3">
                            <label className="form-control">
                                
                                <textarea className="textarea textarea-bordered h-24 md:w-[810px] rounded-full" placeholder="Message*" name="message"></textarea>
                                
                            </label>
                        </div>
                        <div className="mt-4">
                            <button  className="btn btn-outline btn-accent rounded-full">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;