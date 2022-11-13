import Image from "next/image";
import React from "react";
import gameDevIllustration from "@/components/svgs/game-dev-illustration.svg";
import SearchForm from "../common/SearchForm";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section id="hero-section">
      <div className="container mx-auto pt-16 pb-20 flex flex-col px-5 md:px-0 md:flex-row justify-between items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-semibold text-neutral-800">
            Find your dream jobs with{" "}
            <em className="text-purple-600">JobsApp</em>
          </h1>
          <p className="text-neutral-600">
            Join the top skilled video games professional community, to
            accelerate your career
          </p>
          <SearchForm />
        </div>
        <Image
          src={gameDevIllustration}
          width={500}
          height={500}
          alt="Game developer illustration"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
