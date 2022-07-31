import { useSession, signOut } from "next-auth/react";
import { OutlinedButton } from "./Buttons";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const UserAuthButton = () => {
  const { data: session } = useSession();
  const [dropdown, setDropdown] = useState(false);
  const togglingDropdown = () => setDropdown(!dropdown);
  const ref = useRef();
  const router = useRouter();

  const handleSignin = (e) => {
    e.preventDefault();
    router.push("/signin");
  };

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if ([dropdown] && ref.current && !ref.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [dropdown]);

  return (
    <>
      {session && (
        <button className="w-10 h-10 rounded-full" onClick={togglingDropdown}>
          <img
            src={session.user.image}
            alt={`${session.user.name}'s avatar`}
            className="w-full h-full rounded-full"
          />
        </button>
      )}
      {session && dropdown && (
        <div
          ref={ref}
          className="absolute  right-4 py-3 px-0 bg-white dark:bg-black border border-black dark:border-white border-opacity-10 dark:border-opacity-10 rounded-xl font-montserrat"
        >
          <ul className="grid col-span-1">
            <li>
              <button
                className="inline-flex items-center w-full py-1 px-3 hover:bg-gray-200 dark:hover:bg-gray-800 justify-between"
                onClick={() => {
                  router.push("/add");
                }}
              >
                <span className="mr-2">Add New Resource</span>
              </button>
            </li>
            <li>
              <button
                className="inline-flex items-center w-full py-1 px-3 hover:bg-gray-200 dark:hover:bg-gray-800 justify-between"
                onClick={() => {
                  router.push("/my-resources");
                }}
              >
                <span className="mr-2">My Resources</span>
              </button>
            </li>

            <li className="inline-flex items-center py-1 px-3 hover:bg-gray-200 dark:hover:bg-gray-800 ">
              <span className="mr-2">Toggle Theme: </span>
              <ThemeToggle />
            </li>
            <li>
              <button
                className="inline-flex items-center w-full py-1 px-3 hover:bg-gray-200 dark:hover:bg-gray-800"
                onClick={handleSignout}
              >
                <span className="mr-2">Log Out</span>
              </button>
            </li>
          </ul>
        </div>
      )}

      {!session && (
        <OutlinedButton handleOnClick={handleSignin}>Sign In</OutlinedButton>
      )}
    </>
  );
};

export default UserAuthButton;
