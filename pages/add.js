import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { OutlinedButton } from "../components/Buttons";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export default function AddResource() {
  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceCategory, setResourceCategory] = useState("Article");
  const [resourceLink, setResourceLink] = useState("");
  const [sourceTwitter, setSourceTwitter] = useState("");

  const [resourceTag, setResourceTag] = useState("");
  const [resourceImage, setResourceImage] = useState("");
  console.log(resourceImage);

  console.log(
    resourceTitle,
    resourceCategory,
    resourceTag,
    resourceLink,
    sourceTwitter
  );

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
  ];
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      resourceTitle,
      resourceCategory,
      resourceTag,
      resourceLink,
      sourceTwitter,
    };
    try {
      const response = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log("something went wrong");
        //set an error banner here
      } else {
        resetForm();
        router.push("/explore");
        console.log("form submitted successfully !!!");
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log("there was an error submitting", error);
    }
  };

  const resetForm = () => {
    setResourceTitle("");
    setResourceCategory("");
    setResourceTag("");
    setResourceLink("");
    setSourceTwitter("");
  };

  return (
    <div>
      <Head>
        <title>Add Resource | ResourceHub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-2 ml-7">
        <Link href="/">Logo</Link>
      </div>

      <main className="w-full h-full bg-white dark:bg-black">
        <div className="py-16 px-16 text-center">
          <h1 className="font-sf text-6xl font-extrabold capitalize max-w-4xl ml-auto mr-auto leading-none tracking-wider">
            Share a valuable resource you came across
          </h1>
          <div>
            <h2 className="text-2xl mt-5 font-semibold font-sf">
              Add a new resource to our ever-growing database!!
            </h2>
            <div className="font-sf mt-5">
              <form
                class="space-y-4 py-8 px-12 text-gray-800 dark:text-gray-100 w-4/6 ml-auto mr-auto text-left bg-purple-200 rounded-3xl"
                onSubmit={handleSubmit}
              >
                <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0 text-xl">
                  <div class="w-full px-2 py-3 md:w-1/2">
                    <label class="block mb-1" for="formGridCode_name">
                      Name of the resource *
                    </label>
                    <input
                      onChange={(e) => setResourceTitle(e.target.value)}
                      class="w-full h-10 px-3 text-lg  rounded-lg "
                      type="text"
                      value={resourceTitle}
                      required
                    />
                  </div>
                  <div class="w-full px-2 py-3 md:w-1/2">
                    <label class="block mb-1" for="formGridCode_last">
                      Link to the resource *
                    </label>
                    <input
                      class="w-full h-10 px-3 text-lg   rounded-lg "
                      type="url"
                      onChange={(e) => setResourceLink(e.target.value)}
                      value={resourceLink}
                      required
                    />
                  </div>
                  <input
                    type="file"
                    onChange={(e) => setResourceImage(e.target.value)}
                    value={resourceImage}
                    class="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100
                      "
                  />
                </div>
                <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0 text-lg">
                  <div class="w-full px-2 md:w-1/3 py-3">
                    <label class="block mb-1" for="formGridCode_month">
                      Select Category *
                    </label>
                    <select
                      class="w-full h-10 px-3 text-lg   rounded-lg"
                      value={resourceCategory}
                      onChange={(e) => setResourceCategory(e.target.value)}
                      required
                    >
                      {options.map((o) => (
                        <option
                          class="w-full h-10 px-3 text-lg   rounded-lg "
                          value={o}
                        >
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="w-full px-2 md:w-1/3 py-3">
                    <label class="block mb-1" for="formGridCode_year">
                      Add a Tag *
                    </label>
                    <input
                      class="w-full h-10 px-3 text-lg   rounded-lg "
                      type="text"
                      onChange={(e) => setResourceTag(e.target.value)}
                      value={resourceTag}
                      required
                    />
                  </div>
                  <div class="w-full px-2 md:w-1/3 py-3">
                    <label class="block mb-1" for="formGridCode_cvc">
                      Source's Twitter Handle
                    </label>
                    <input
                      class="w-full h-10 px-3 text-lg   rounded-lg "
                      type="text"
                      onChange={(e) => setSourceTwitter(e.target.value)}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <OutlinedButton type="submit">Add Resource</OutlinedButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <div className="absolute bottom-3 left-5">
        <Link href="/explore">
          <a className="py-1 px-2 text-black dark:text-white font-medium text-center transition-all ease-in-out duration-150 rounded-lg inline-flex items-center justify-start hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 text-lg">
            <MdOutlineKeyboardBackspace className="mr-1" size={27} />
            Go Back
          </a>
        </Link>
      </div>
    </div>
  );
}
