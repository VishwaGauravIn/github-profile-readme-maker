import Head from "next/head";
import Animation from "../components/Animation";
import Footer from "../components/elements/Footer";
import Pagination from "../components/elements/Pagination";
import NavBar from "../components/NavBar";
import HomePage from "../components/slides/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>GPM : GitHub Profile Maker</title>
        <meta
          name="description"
          content="Best Profile Generator, Create your perfect GitHub Profile ReadMe in the best possible way. Lots of features and tools included, all for free !"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Fonts in Head for Fast Serving */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="overflow-x-hidden max-w-[100vw] p-4 text-green-200">
        <NavBar />
        <HomePage />
        <Footer />
      </body>
    </>
  );
}
