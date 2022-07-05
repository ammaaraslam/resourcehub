import { OutlinedButton } from "../Buttons";

const Header = () => {
  return (
    <header className="fixed z-50 py-3 px-0  w-full h-fit flex items-center justify-between bg-background dark:bg-darkBackground bg-opacity-80 dark:bg-opacity-100 backdrop-blur-lg backdrop-saturate-150 text-darkText dark:text-text border-b-2 border-black dark:border-white border-opacity-5 dark:border-opacity-5">
      <div className="p-0 ml-8 text-center inline-flex items-center justify-center">
        <span className="text-2xl font-bold">ResourceHub</span>
      </div>

      <div className="mr-8">
        <OutlinedButton>Sign In</OutlinedButton>
      </div>
    </header>
  );
};

export default Header;
