import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Musicify 2.0</title>     
      </Head>
      <main>
        <Sidebar />
        {/* Center */}
      </main>
      <div>{/* Player */}</div>
    </div>
  );
};

export default Home;
