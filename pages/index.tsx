import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Head from "next/head";
import HeroSection from "@/components/home/HeroSection";
import JobOfferItem from "@/components/common/JobOfferItem";
import LatestJobsSection from "@/components/home/LatestJobsSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>JobsApp | Find your dream jobs</title>
        <meta name="description" content="Find your dream jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-purple-100">
        <header>
          <Navbar />
        </header>
        <main>
          <HeroSection />
          <LatestJobsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
