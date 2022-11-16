import React from "react";
import logo from "@/components/svgs/logo.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className="container mx-auto py-3 px-5 lg:px-0 flex flex-row justify-between items-cente">
        <div>
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
        <div>
          <Link href="/recruiter">
            <div className="bg-purple-700 rounded-md px-5 py-1 text-white">Recruiter view</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
