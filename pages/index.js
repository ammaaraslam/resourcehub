import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdExplore } from "react-icons/md";
import { OutlinedButton, PrimaryButton } from "../components/Buttons";
import CategoryBadge from "../components/explore/CategoryBadge";
import Feed, { SkeletonFeed } from "../components/explore/Feed";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Meta } from "../components/Meta";

export default function Home() {
  const categories = [
    "Article",
    "Course",
    "Hackathon",
    "Developer Tool",
    "Book",
    "CheatSheet",
    "Roadmap",
    "Online Platform",
    "Blog",
    "API",
    "Open Source",
  ];
  const router = useRouter();
  const handleSignin = (e) => {
    e.preventDefault();
    router.push("/signin");
  };
  const [resources, setResources] = useState([]);
  const [resourcesLoading, setResourcesLoading] = useState(true);
  let skeletonCards = Array(4).fill(0);

  useEffect(() => {
    axios
      .get(`/api/resources`)
      .then(async (response) => {
        if (response.request.status === 400) {
        } else {
          await setResources(response.data);
          setResourcesLoading(false);
        }
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <div>
      <Meta
        title="ResourceHub | A Place For All Developer Resources"
        description="Discover the best resources. Share your favourite resources."
      />
      <Header />

      <main className="w-full h-full bg-white dark:bg-black">
        <div className="pt-56 flex">
          <div className="ml-auto mr-auto md:max-w-6xl max-w-4xl text-center">
            <h1 className="p-2 text-black dark:text-white font-extrabold md:text-8xl text-5xl tracking-wider font-lalezar uppercase">
              A place for all{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-indigo-300 to-purple-600">
                developer resources
              </span>
            </h1>
            <p className="font-medium md:text-3xl text-2xl mt-2 max-w-4xl ml-auto mr-auto font-montserrat opacity-80">
              Discover the best resources. Share your favourite resources.
            </p>
            <div className="mt-7 inline-flex">
              <PrimaryButton handleOnClick={handleSignin}>
                Get Started
              </PrimaryButton>
              <OutlinedButton
                handleOnClick={() => {
                  router.push("/explore");
                }}
                type="big"
              >
                Explore <MdExplore className="ml-2" />
              </OutlinedButton>
            </div>
          </div>
        </div>
        <div className="md:py-14 py-11 md:mt-52 mt-40 px-3  w-11/12 ml-auto mr-auto rounded-3xl bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10">
          <div className=" w-full h-fit p-4">
            <div className="w-3/4 ml-auto mr-auto">
              <h1 className="p-2 text-center text-black dark:text-white font-black md:text-5xl text-3xl font-lalezar uppercase">
                <span className="font-extrabold opacity-80 dark:opacity-80">
                  Find the right resources
                </span>
                <br></br>for yourself
              </h1>
            </div>
            <div className="md:p-8 p-5 bg-black dark:bg-white text-white dark:text-black rounded-xl md:flex block justify-between w-11/12 ml-auto mr-auto mt-5">
              <p className="font-montserrat font-bold md:text-4xl text-3xl md:max-w-xs text-left mt-auto mb-auto">
                Every type of resource you can imagine
              </p>

              <div className="grid md:grid-cols-2 grid-cols-1 md:w-1/2 w-full">
                {categories.map((category, index) => (
                  <div key={index} className="m-1">
                    <CategoryBadge category={category} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-24 w-full h-fit p-4">
            <div className="w-3/4 ml-auto mr-auto">
              <h1 className="p-2 text-center text-black dark:text-white font-black md:text-5xl text-3xl font-lalezar uppercase">
                <span className="font-extrabold opacity-80 dark:opacity-80">
                  Share resources you find
                </span>
                <br></br>interesting
              </h1>
            </div>
            <div className="md:p-8 p-5 bg-black dark:bg-white text-white dark:text-black rounded-xl md:flex block justify-between md:w-4/5 w-11/12 ml-auto mr-auto mt-5">
              <p className="font-montserrat font-bold md:text-4xl text-3xl md:max-w-xs text-left mt-auto mb-auto">
                Found a useful resource on the web? Share it with others
              </p>
              <div className="font-montserrat font-medium md:text-2xl text-xl md:w-1/2 w-full mt-auto mb-auto">
                <p>
                  Easily and quickly fill a simple form with just 4 fields and
                  you have successfully added your resource to our database.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-24 w-full h-fit p-4">
            <div className="w-3/4 ml-auto mr-auto">
              <h1 className="p-2 text-center text-black dark:text-white font-black md:text-5xl text-3xl font-lalezar uppercase">
                <span className="font-extrabold opacity-80 dark:opacity-80">
                  What are you waiting for?
                </span>
                <br></br>Get Started
              </h1>
            </div>
            <div className="md:p-8 p-5 bg-black dark:bg-white text-white dark:text-black rounded-xl md:flex block justify-between md:w-4/5 w-11/12 ml-auto mr-auto mt-5">
              <p className="font-montserrat font-bold md:text-4xl text-3xl md:max-w-xs text-left mt-auto mb-auto">
                Quickly start using this app in 2 simple steps
              </p>

              <div className="font-montserrat font-medium md:text-2xl text-xl md:w-1/2 w-full md:mt-0 mt-2">
                <ul>
                  <li>1️⃣ Sign Up with a GitHub/Google account.</li>
                  <li className="mt-2">
                    2️⃣ Discover resources through the explore page.
                  </li>
                  <li className="mt-2">
                    3️⃣ Add a resource to our database by filling a simple, short
                    form.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ml-auto mr-auto mt-11 ">
            <PrimaryButton handleOnClick={handleSignin}>
              Get Started
            </PrimaryButton>
          </div>
        </div>
        <div className="md:mt-24 mt-20 w-full h-fit p-4">
          <h1 className="pt-2 px-2 text-black dark:text-white font-black md:text-5xl text-4xl font-lalezar uppercase">
            Latest Resources
          </h1>
          <div className="-mt-10">
            {resourcesLoading ? (
              <SkeletonFeed
                resourceLoading={resourcesLoading}
                skeletonCards={skeletonCards}
              />
            ) : (
              <Feed resources={resources} />
            )}
          </div>
          <div className="flex justify-center items-center ml-auto mr-auto pb-6">
            <OutlinedButton
              handleOnClick={() => {
                router.push("/explore");
              }}
              type="big"
            >
              More <MdExplore className="ml-2" />
            </OutlinedButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
