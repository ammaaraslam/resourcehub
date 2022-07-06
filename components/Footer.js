import Link from "next/link";
import { OutlinedButton } from "./Buttons";

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 py-6 px-3 w-full h-fit bg-white flex justify-between dark:bg-black  text-black dark:text-white border-t-2 border-black dark:border-white border-opacity-10 dark:border-opacity-10">
        <div className="p-0 ml-8">
          <span className="text-2xl font-bold">ResourceHub</span>
          <p className="font-sf text-sm font-medium">
            Built with 💚 by Ammaar Aslam
          </p>
        </div>
        <div className="flex justify-between">
          <div className="font-medium text-lg font-sf tracking-wider mr-16">
            <li className="list-none text-darkBackground dark:text-background text-purple-500 my-1 transition-all duration-200 font-bold text-xl">
              Explore
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/">Articles</Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/">Courses</Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/">Hackathons</Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/">Developer Tools</Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/">Cheatsheets</Link>
            </li>
          </div>
          <div className="font-medium text-lg font-sf tracking-wider mr-16">
            <li className="list-none text-darkBackground dark:text-background text-purple-500 my-1 transition-all duration-200 font-bold text-xl">
              Community
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/">Request Features</Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/">Report a bug</Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/">Contribute</Link>
            </li>
          </div>
        </div>
      </footer>
      <div className="bottom-0 py-6 px-3 w-full h-fit bg-white flex justify-center dark:bg-black  text-black dark:text-white border-t-2 border-black dark:border-white border-opacity-10 dark:border-opacity-10">
        Built as a submission to the PlanetScale X Hashnode Hackathon
      </div>
    </>
  );
};

export default Footer;
