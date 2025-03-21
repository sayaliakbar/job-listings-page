import BgHeaderDesktop from "../assets/bg-header-desktop.svg";
import BgHeaderMobile from "../assets/bg-header-mobile.svg";

export default function Header() {
  return (
    <div className="w-full">
      <img
        className="hidden sm:block w-full"
        src={BgHeaderDesktop}
        alt="Background Header"
      />
      <img
        className="sm:hidden w-full"
        src={BgHeaderMobile}
        alt="Background Header"
      />
    </div>
  );
}
