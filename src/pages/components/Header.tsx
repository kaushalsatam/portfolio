import { NavLink } from "react-router";
import GlassSurface from "@/components/GlassSurface";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const Header = () => {
  return (
    <div className="flex justify-around items-center p-4 m-4 w-full absolute top-2.5 z-50">
      <NavLink to={"#"}>kaushalsatam.dev</NavLink>
      <GlassSurface width={500} height={50} borderRadius={50}>
        <div className="flex items-center justify-center gap-6">
          <NavLink to={"#"}>Home</NavLink>
          <NavLink to={"#"}>About</NavLink>
          <NavLink to={"#"}>Experience</NavLink>
          <NavLink to={"#"}>Projects</NavLink>
          <NavLink to={"#"}>More</NavLink>
          <NavLink to={"#"}>Contact</NavLink>
        </div>
      </GlassSurface>
      <div className="w-44">
        <AnimatedThemeToggler />
      </div>
    </div>
  );
};

export default Header;
