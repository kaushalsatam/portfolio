import Image from "next/image";
import Link from "next/link";
import Jumper from "../../../public/arrow.png";

function Jumper({ navigate }) {
    return <>
        <Link href={navigate} className="relative"><Image src={Jumper} alt="arrow" /></Link>
    </>
}

export default Jumper;
