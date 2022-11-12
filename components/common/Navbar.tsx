import React from "react";
import logo from "@/components/svgs/logo.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className="container mx-auto py-3">
      <Link href="/">
        <div className="flex flex-row items-center gap-4">
          <Image
            className="flex"
            width={50}
            height={50}
            src={logo}
            alt="JobsApp's Logo"
            loading="lazy"
          />
          <span className="flex text-3xl text-neutral-700">JobsApp</span>
        </div>
      </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
