import { type NextPage } from "next";
import build from "next/dist/build";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { trpc } from "../../utils/trpc";

const BuildPage: NextPage = () => {
  const router = useRouter();
  const { buildId } = useRouter().query as {
    buildId: string;
  };

  const build = trpc.builds.getBuildById.useQuery({
    buildId,
  });

  return (
    <>
      <Head>
        <title>View Build T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container m-auto flex flex-col gap-12 pt-12">
        <h1 className="text-4xl text-white">{build.data?.title}</h1>

        <pre className="bg-gray-500 p-4">{build.data?.build}</pre>
      </main>
    </>
  );
};

export default BuildPage;
