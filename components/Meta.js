import Head from "next/head";

export const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Resources, Discover, Share, Articles, Developer Tools, APIs, Open Source, Roadmaps, Cheat Sheets, Online Platforms, Hackathons, Courses, Blogs, Books"
      />
      <meta name="author" content="Ammaar Aslam" />
      <link rel="icon" href="/Logo.svg" />
    </Head>
  );
};
