import UserAuthButton from "../UserAuthButton";
import Image from "next/image";
import logo from "../../public/ResourceHubLogo.png";
import Link from "next/link";
const Header = () => {
  return (
    <header className="fixed z-50 py-2 px-0  w-full h-fit flex items-center justify-between bg-background dark:bg-darkBackground bg-opacity-80 dark:bg-opacity-100 backdrop-blur-lg backdrop-saturate-150 text-darkText dark:text-text border-b-2 border-black dark:border-white border-opacity-5 dark:border-opacity-5">
      <div className="p-0 ml-8 text-center inline-flex items-center justify-center">
        <div className="md:ml-8 ml-0 p-0 text-center inline-flex items-center justify-center">
          <Link href="/">
            <div className=" cursor-pointer text-center inline-flex items-center justify-center">
              <Image src={logo} alt="ResourceHub Logo" width={45} height={45} />
              <span className="text-2xl md:block hidden font-semibold ml-2 font-lalezar tracking-wider leading-loose">
                ResourceHub
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="mr-8">
        <UserAuthButton />
      </div>
    </header>
  );
};

export default Header;
