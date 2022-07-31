import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { OutlinedButton } from "../components/Buttons";
import Feed, { SkeletonFeed } from "../components/explore/Feed";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Meta } from "../components/Meta";
export default function MyResources() {
  const [resources, setResources] = useState([]);
  const [resourcesLoading, setResourcesLoading] = useState(true);
  let skeletonCards = Array(4).fill(0);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    axios
      .get(`/api/myResources`)
      .then(async (response) => {
        if (response.request.status === 400) {
          console.log("false");
        } else {
          await setResources(response.data);
          setResourcesLoading(false);
        }
      })
      .catch((error) => {
        res.json(error).end();
      });
  }, []);

  return (
    <div>
      <Meta
        title="My Resources | ResourceHub"
        description="Resources you have added to our database"
      />
      <Header />
      <main className="w-full h-full bg-white dark:bg-black">
        <div className="pt-20 pl-12">
          {resourcesLoading ? (
            <SkeletonFeed
              resourceLoading={resourcesLoading}
              skeletonCards={skeletonCards}
            />
          ) : resources.length === 0 ? (
            <div className="py-40 px-10 text-center">
              <h1 className="font-sf font-semibold text-2xl">
                You have not added any resources
              </h1>
              <OutlinedButton
                handleOnClick={() => {
                  router.push("/add");
                }}
              >
                Add Resource
              </OutlinedButton>
            </div>
          ) : (
            <Feed resources={resources} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

MyResources.auth = true;
