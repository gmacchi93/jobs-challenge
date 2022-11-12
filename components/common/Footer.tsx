import React from "react";
import logo from "@/components/svgs/logo.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-purple-900">
      <div className="container mx-auto flex flex-col gap-6 items-center py-20 text-white">
        <Link href="/">
          <div className="flex flex-row items-center gap-4">
            <span className="flex text-3xl">JobsApp</span>
          </div>
        </Link>
        <div className="text-center">
          <p>Special thanks</p>
          <p>
            The image was provide by vectorjuice on{" "}
            <a
              className="underline"
              href="https://www.freepik.com/free-vector/esports-coaching-abstract-concept-illustration-lessons-with-pro-gamer-free-esport-webinar-player-performance-video-game-training-application-cybersport-team_12144933.htm#query=illustrations%20game%20dev&position=1&from_view=search&track=ais"
            >Freepik</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
