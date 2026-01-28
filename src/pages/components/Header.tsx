import { NavLink } from "react-router";
import GlassSurface from "@/components/GlassSurface";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import GradualBlurMemo from "@/components/GradualBlur";
import logo from "@/assets/logo-dark.svg";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-24 z-40 pointer-events-none">
        <GradualBlurMemo position="top" strength={1.5} exponential={true} />
      </div>

      <div className="fixed top-4 left-0 w-full z-50 flex justify-evenly items-center">
        <div className="bg-white rounded-full h-16 w-16">
          <img
            src={logo}
            height={100}
            width={100}
            className="fill-blue-700"
          ></img>
        </div>
        <GlassSurface width={500} height={50} borderRadius={50}>
          <div className="flex items-center justify-center gap-6">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/aboutme"}>About</NavLink>
            <NavLink to={"#"}>Experience</NavLink>
            <NavLink to={"#"}>Projects</NavLink>
            <NavLink to={"#"}>More</NavLink>
            <NavLink to={"#"}>Contact</NavLink>
          </div>
        </GlassSurface>
        <AnimatedThemeToggler />
      </div>
    </>
  );
};

export default Header;
