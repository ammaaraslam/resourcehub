import { useSession, signIn, signOut } from "next-auth/react";
import { OutlinedButton } from "./Buttons";

const UserAuthButton = () => {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <>
      {session && (
        <button className="w-10 h-10 rounded-full" onClick={handleSignout}>
          <img src={session.user.image} className="rounded-full" />
        </button>
      )}
      {!session && (
        <OutlinedButton handleOnClick={handleSignin}>Sign In</OutlinedButton>
      )}
    </>
  );
};

export default UserAuthButton;
