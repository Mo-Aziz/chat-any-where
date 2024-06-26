import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

const UserAvatar = ({
  name,
  image,
  className,
}: {
  name?: string | null;
  image?: string | null;
  className?: string;
}) => {
  return (
    <Avatar className={cn("bg-white text-black hover:border-none", className)}>
      {image && (
        <Image
          src={image}
          alt="user profile image"
          width={50}
          height={50}
          className="rounded-full"
          // referrerPolicy="no-referrer"
        />
      )}
      {/* name initials fall back */}
      <AvatarFallback
        delayMs={1000}
        className="dark:bg-white dark:text-black text-lg"
      >
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
