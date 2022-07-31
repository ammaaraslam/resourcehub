import Link from "next/link";
import Image from "next/image";
import logo from "../public/ResourceHubLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 py-6 px-3 w-full h-fit bg-white md:flex block justify-between dark:bg-black  text-black dark:text-white border-t-2 border-black dark:border-white border-opacity-10 dark:border-opacity-10">
        <div className="p-0 md:ml-3 md:mr-0 ml-auto mr-auto md:text-left text-center">
          <Link href="/">
            <div className="cursor-pointer text-center inline-flex items-center justify-center">
              <Image src={logo} alt="ResourceHub Logo" width={45} height={45} />
              <span className="text-2xl font-semibold ml-2 font-vollkorn tracking-wider leading-loose">
                ResourceHub
              </span>
            </div>
          </Link>
          <p className="font-montserrat ml-4 text-sm font-semibold">
            Built with 💚 by{" "}
            <a
              href="https://twitter.com/itsammaar_7"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-600 hover:underline"
            >
              Ammaar Aslam
            </a>
          </p>
        </div>
        <div className="flex justify-between md:mt-0 mt-4">
          <ul className="font-medium text-lg font-montserrat tracking-wider md:mr-16 mr-4 md:ml-0 ml-8">
            <li className="list-none text-darkBackground dark:text-background text-purple-600 my-1 transition-all duration-200 font-black text-xl">
              Explore
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/explore?category=articles">Articles</Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/explore?category=courses">Courses</Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/explore?category=hackathons">Hackathons</Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/explore?category=developer_tools">
                Developer Tools
              </Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/explore?category=cheatsheets">Cheatsheets</Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/explore?category=books">Books</Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="/explore">Many More</Link>
            </li>
          </ul>
          <ul className="font-medium text-lg font-montserrat tracking-wider md:mr-16 mr-8">
            <li className="list-none text-darkBackground dark:text-background text-purple-600 my-1 transition-all duration-200 font-bold text-xl ">
              Community
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="https://github.com/ammaaraslam/resourcehub">
                Request Features
              </Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="https://github.com/ammaaraslam/resourcehub">
                Report a bug
              </Link>
            </li>
            <li className="list-none text-darkBackground dark:text-background opacity-80 hover:opacity-100 my-1 hover:underline transition-all duration-200">
              <Link href="https://github.com/ammaaraslam/resourcehub">
                Contribute
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="bottom-0 py-4 px-3 w-full h-fit bg-white flex justify-center dark:bg-black  text-black dark:text-white border-t-2 border-black dark:border-white border-opacity-10 dark:border-opacity-10 font-montserrat font-semibold text-center">
        <p>
          Built as a submission to the{" "}
          <a
            href="https://townhall.hashnode.com/planetscale-hackathon"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 hover:underline"
          >PlanetScale X Hashnode Hackathon</a>

        </p>
         
      </div>
    </>
  );
};

export default Footer;
