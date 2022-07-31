import Footer from "../components/Footer";
import Header from "../components/Header";
import { SiNextdotjs, SiTailwindcss, SiPrisma, SiVercel } from "react-icons/si";
import Image from "next/image";
import planetscale from "../public/planetscale.png";
import { useTheme } from "next-themes";
import { Meta } from "../components/Meta";

export default function About() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      <Meta title="About | ResourceHub" description="About ResourceHub" />
      <Header />
      <main className="w-full h-full bg-white dark:bg-black">
        <div className="md:py-40 pt-40 pb-20 flex">
          <div className="ml-auto mr-auto max-w-5xl text-center">
            <h2 className="font-lalezar font-normal tracking-wider text-green-400 md:text-3xl text-xl underline">
              About ResourceHub
            </h2>
            <p className="md:text-5xl text-4xl font-montserrat font-semibold mt-3 max-w-5xl tracking-wide leading-[1.15]">
              ResourceHub is platform for developers to{" "}
              <span className="underline decoration-purple-600 italic">
                discover the best resources
              </span>{" "}
              and{" "}
              <span className="underline decoration-purple-600 italic">
                share their favourite resources
              </span>
              .
            </p>
            <p className="md:text-3xl text-2xl font-montserrat font-semibold ml-auto mr-auto mt-8 max-w-3xl tracking-wide">
              ✨<span className="text-purple-600 font-bold">Discover</span>{" "}
              resources without searching the entire internet and wasting your
              time.
            </p>
            <p className="md:text-3xl text-2xl font-montserrat font-semibold ml-auto mr-auto mt-3 max-w-3xl tracking-wide">
              ✨<span className="text-purple-600 font-bold">Share</span>{" "}
              resources that you find to be useful or share your own resources
              that you created.
            </p>
          </div>
        </div>
        <div className="px-10 pb-5">
          <h1 className="font-lalezar font-semibold text-3xl underline tracking-wider capitalize">
            proudly built with 🌟
          </h1>
          <div className="md:flex grid grid-cols-2 justify-center items-center md:p-5">
            <a
              href="https://nextjs.org"
              className="opacity-70 hover:opacity-100 transition-all duration-200 my-7 mx-14"
            >
              <SiNextdotjs size={70} className="ml-auto mr-auto" />
              <span className="text-center flex items-center justify-center font-montserrat text-xl mt-1 font-semibold">
                Next.js
              </span>
            </a>
            <a
              href="https://tailwindcss.com"
              className="opacity-70 hover:opacity-100 transition-all duration-200 my-7 mx-14"
            >
              <SiTailwindcss size={70} className="ml-auto mr-auto" />
              <span className="text-center flex items-center justify-center font-montserrat text-xl mt-1 font-semibold">
                TailwindCSS
              </span>
            </a>
            <a
              href="https://prisma.io"
              className="opacity-70 hover:opacity-100 transition-all duration-200 my-7 mx-14"
            >
              <SiPrisma text size={70} className="ml-auto mr-auto" />
              <span className="text-center flex items-center justify-center font-montserrat text-xl mt-1 font-semibold">
                Prisma
              </span>
            </a>
            {currentTheme === "dark" ? (
              <a
                href="https://planetscale.com"
                className="opacity-70 hover:opacity-100 transition-all duration-200 my-7 mx-14"
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={planetscale}
                    width={70}
                    height={70}
                    alt="planetscale logo"
                    style={{
                      filter: "brightness(0) invert(1)",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </div>
                <span className="text-center flex items-center justify-center font-montserrat text-xl mt-1 font-semibold">
                  PlanetScale
                </span>
              </a>
            ) : (
              <a
                href="https://planetscale.com"
                className="opacity-70 hover:opacity-100 transition-all duration-200 my-7 mx-14"
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={planetscale}
                    alt="planetscale logo"
                    width={70}
                    height={70}
                  />
                </div>
                <span className="text-center flex items-center justify-center font-montserrat text-xl mt-1 font-semibold">
                  PlanetScale
                </span>
              </a>
            )}

            <a
              href="https://vercel.com"
              className="opacity-70 hover:opacity-100 transition-all duration-200 my-7 mx-14"
            >
              <SiVercel size={70} className="ml-auto mr-auto" />
              <span className="text-center flex items-center justify-center font-montserrat text-xl mt-1 font-semibold">
                Vercel
              </span>
            </a>
          </div>
        </div>

        <div className="px-10 py-5">
          <div className="ml-auto mr-auto">
            <h1 className="font-lalezar font-semibold text-3xl underline tracking-wider capitalize">
              Thanks for visiting 💚
            </h1>
            <ul className="text-xl font-montserrat font-medium ml-6 p-3 pb-16">
              <li className="mt-2">
                🟣 If you enjoyed the experience using ResourceHub,{" "}
                <a
                  href="https://github.com/ammaaraslam/resourcehub"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-green-400"
                >
                  star the repository on GitHub
                </a>
                .
              </li>
              <li className="mt-2">
                🟣 Found a bug?{" "}
                <a
                  href="https://github.com/ammaaraslam/resourcehub"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-green-400"
                >
                  Report it on GitHub
                </a>
                .
              </li>
              <li className="mt-2">
                🟣 Want a new feature?{" "}
                <a
                  href="https://github.com/ammaaraslam/resourcehub"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-green-400"
                >
                  Create a request on GitHub
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
