import { OutlinedButton } from "../Buttons";
import UserAuthButton from "../UserAuthButton";
import { MdMenu } from "react-icons/md";

const Header = ({ props }) => {
  const togglingOpenSidebar = () => props.setOpenSidebar(!props.openSidebar);
  return (
    <header className="fixed z-50 py-2 px-0  w-full h-fit flex items-center justify-between bg-background dark:bg-darkBackground bg-opacity-80 dark:bg-opacity-100 backdrop-blur-lg backdrop-saturate-150 text-darkText dark:text-text border-b-2 border-black dark:border-white border-opacity-5 dark:border-opacity-5">
      <button onClick={togglingOpenSidebar} className="ml-6">
        <MdMenu className="mt-auto mb-auto" size={28} />
      </button>
      <div className="p-0 text-center inline-flex items-center justify-center">
        <span className="text-2xl font-bold">ResourceHub</span>
      </div>

      <div className="mr-8">
        <UserAuthButton />
      </div>
    </header>
  );
};

export default Header;
