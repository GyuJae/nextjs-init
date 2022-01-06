import Head from "next/head";

const Seo: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title} | Next Movie</title>
    </Head>
  );
};

export default Seo;
