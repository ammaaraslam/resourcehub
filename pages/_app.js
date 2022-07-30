import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider, useSession, signIn } from "next-auth/react";
import React from "react";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <ThemeProvider
            forcedTheme={Component.theme || undefined}
            attribute="class"
          >
            <Component {...pageProps} />
          </ThemeProvider>
        </Auth>
      ) : (
        <ThemeProvider
          forcedTheme={Component.theme || undefined}
          attribute="class"
        >
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </SessionProvider>
  );
}

export default MyApp;

function Auth({ children }) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  React.useEffect(() => {
    if (status === "loading") return;
    if (!isUser) signIn();
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div className="w-full h-screen bg-white dark:bg-black"></div>;
}
