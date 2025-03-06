import Image from "next/image";
import { MailIcon } from "lucide-react";
import linkedin from "../../../public/linkedin.png"

function Contact() {
    return <>
        <div id="contact" className="h-dvh w-screen flex justify-center items-center text-white">
            <div className="flex flex-col ">
                <div className="flex flex-col m-8">
                    <p className="text-center text-gray-300">Get in touch</p>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-center m-2">Contact Me</h2>
                </div>
                <div className="border border-white rounded-3xl p-6 flex flex-col lg:flex-row gap-6">
                    <div className="flex gap-4"><MailIcon /> satamkaushal@gmail.com</div>
                    <div className="flex gap-4"><Image src={linkedin} alt="linkedin" className="invert" height={25} /> LinkedIn</div>
                </div>
            </div>
        </div>
    </>
}

export default Contact;
