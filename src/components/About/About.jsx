import Title from "../ui/title";

function About() {
    return <>
        <div id="about" className="h-dvh w-screen flex justify-center items-center text-white">
            <div className="flex flex-col ">
                <Title subtitle={'Get to know more'} title={'About Me'} />
            </div>
        </div>
    </>
}

export default About;
