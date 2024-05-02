"use client";
import logoImage from "@logos/chat-icon.png";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="overflow-hidden" prefetch={false}>
      <div className=" mb-10 md:m-auto flex items-center justify-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={logoImage}
            alt="logo"
            className="dark:filter dark:invert"
            width={90}
            height={65}
          />
          <h3 className="font-extrabold leading-none text-2xl text-nowrap text-capitalize">
            Chat Any Where
          </h3>
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
