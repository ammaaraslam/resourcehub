import { getProviders, signIn } from "next-auth/react";
import { Meta } from "../components/Meta";
import Header from "../components/signin/Header";
import { OutlinedButton } from "../components/Buttons";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export default function SignIn({ providers }) {
  return (
    <>
      <Meta
        title="Sign In | ResourceHub"
        description="Sign In to ResourceHub"
      />
      <Header />
      <main className="w-full md:h-screen h-fit bg-white dark:bg-black">
        <div className="pt-28 md:px-16 md:pb-0 pb-4 px-8 text-center">
          <h1 className="font-lalezar md:text-6xl text-5xl font-extrabold capitalize md:max-w-4xl ml-auto mr-auto leading-none tracking-wider">
            Sign in to ResoureHub
          </h1>
          <div className="font-montserrat mt-5">
            <div className="md:space-y-4 md:py-8 md:px-12 py-4 px-6 md:w-4/6 w-11/12 ml-auto mr-auto text-left rounded-3xl bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10">
              {Object.values(providers).map((provider) => (
                <div key={provider.name} className="text-center">
                  <OutlinedButton
                    handleOnClick={() =>
                      signIn(provider.id, {
                        redirect: true,
                        callbackUrl: "/explore",
                      })
                    }
                    type="submit"
                  >
                    Sign in with {provider.name}
                  </OutlinedButton>
                </div>
              ))}
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
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
