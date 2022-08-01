import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Header from "../components/add/Header";
import { OutlinedButton } from "../components/Buttons";
import { Meta } from "../components/Meta";
import { CgSpinner } from "react-icons/cg";
export default function AddResource() {
  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceCategory, setResourceCategory] = useState("Article");
  const [resourceLink, setResourceLink] = useState("");
  const [sourceTwitter, setSourceTwitter] = useState("");
  const [addingResource, setAddingResource] = useState(false);

  const options = [
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      resourceTitle,
      resourceCategory,
      resourceLink,
      sourceTwitter,
    };
    try {
      const response = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setAddingResource(true);
      if (response.status !== 200) {
        //set an error banner here
      } else {
        resetForm();
        setAddingResource(false);
        router.push("/explore");
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      return error;
      setAddingResource(false);
    }
  };

  const resetForm = () => {
    setResourceTitle("");
    setResourceCategory("Article");
    setResourceLink("");
    setSourceTwitter("");
  };

  return (
    <div className="w-full h-screen">
      <Meta
        title="Add Resource | ResourceHub"
        description="Add a new resource to our database"
      />
      <Header />

      <main className="w-full md:h-screen h-fit bg-white dark:bg-black">
        <div className="pt-28 md:px-16 md:pb-0 pb-4 px-8 text-center">
          <h1 className="font-montserrat md:text-6xl text-4xl font-extrabold capitalize md:max-w-4xl ml-auto mr-auto leading-none tracking-wider">
            Share a valuable resource you came across
          </h1>
          <div>
            <h2 className="md:text-2xl text-xl mt-5 font-semibold font-montserrat">
              Add a new resource to our ever-growing database!!
            </h2>
            <div className="font-montserrat mt-5">
              <form
                className="md:space-y-4 md:py-8 md:px-12 py-4 px-6 md:w-4/6 w-11/12 ml-auto mr-auto text-left rounded-3xl bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10"
                onSubmit={handleSubmit}
              >
                <div className="w-full px-2 py-3 text-lg">
                  <label className="block mb-1" htmlFor="formGridCode_name">
                    Name of the resource *
                  </label>
                  <input
                    onChange={(e) => setResourceTitle(e.target.value)}
                    className="w-full h-10 px-3 text-lg border-2 border-gray-400 rounded-lg "
                    type="text"
                    value={resourceTitle}
                    required
                  />
                </div>
                <div className="w-full  px-2 py-2 text-lg">
                  <label className="block mb-1" htmlFor="formGridCode_last">
                    Link to the resource *
                  </label>
                  <input
                    className="w-full h-10 px-3 text-lg border-2 border-gray-400 rounded-lg "
                    type="url"
                    onChange={(e) => setResourceLink(e.target.value)}
                    value={resourceLink}
                    required
                  />
                </div>
                <div className="flex flex-wrap  justify-between space-y-4 md:space-y-0 text-lg">
                  <div className="w-full px-2 md:w-1/2 py-3">
                    <label className="block mb-1" htmlFor="formGridCode_month">
                      Select Category *
                    </label>
                    <select
                      className="w-full h-10 px-3 text-lg border-2 border-gray-400 rounded-lg"
                      value={resourceCategory}
                      onChange={(e) => setResourceCategory(e.target.value)}
                      required
                    >
                      {options.map((o, index) => (
                        <option
                          key={index}
                          className="w-full h-10 px-3 text-lg border-2 border-gray-400 rounded-lg "
                          value={o}
                        >
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full px-2 md:w-1/2 py-3">
                    <label className="block mb-1" htmlFor="formGridCode_cvc">
                      Author&apos;s Twitter Handle
                    </label>
                    <div className="inline-flex w-full">
                      <span className="mt-auto mb-auto ml-2 text-lg">@</span>
                      <input
                        className="w-full ml-1 h-10 text-lg border-2 border-gray-400 rounded-lg "
                        type="text"
                        onChange={(e) => setSourceTwitter(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  {addingResource && (
                    <OutlinedButton type="submit">
                      Adding Resource{" "}
                      <CgSpinner className="ml-2 mt-auto mb-auto animate-spin" />
                    </OutlinedButton>
                  )}
                  {!addingResource && (
                    <OutlinedButton type="submit">Add Resource</OutlinedButton>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="md:absolute md:bottom-3 md:left-5 block mt-2 md:p-0 p-4">
          <Link href="/explore">
            <span className="cursor-pointer py-1 px-2 text-black dark:text-white font-medium text-center transition-all ease-in-out duration-150 rounded-lg inline-flex items-center justify-start hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 text-lg">
              <MdOutlineKeyboardBackspace className="mr-1" size={27} />
              Go Back
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}

AddResource.auth = true;
