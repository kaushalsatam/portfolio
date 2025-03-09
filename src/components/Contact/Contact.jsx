import Image from "next/image";
import { MailIcon } from "lucide-react";
import linkedin from "../../../public/linkedin.png"
import Title from "../ui/title";

function Contact() {
    return <>
        <div id="contact" className="h-dvh w-screen flex justify-center items-center text-white">
            <div className="flex flex-col ">
                <Title subtitle={'Get in touch'} title={'Contact Me'} />
                <div className="border border-white rounded-3xl p-6 flex flex-col lg:flex-row gap-6">
                    <div className="flex gap-4"><MailIcon /> satamkaushal@gmail.com</div>
                    <div className="flex gap-4"><Image src={linkedin} alt="linkedin" className="invert" height={25} /> LinkedIn</div>
                </div>
            </div>
        </div>
    </>
}

export default Contact;
