import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Musicify 2.0</title>
      </Head>
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div>{/* Player */}</div>
    </div>
  );
};

export default Home;
