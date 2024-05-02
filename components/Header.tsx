import { getServerSession } from "next-auth";
import DarkModeToogle from "./DarkModeToogle";
import Logo from "./Logo";
import UserButton from "./UserButton";
import { authOptions } from "@/auth";
import Link from "next/link";
import { MessageSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";

async function Header() {
  // pulling loging session
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        {/* logo */}
        <Logo />
        {/* right section */}
        <div className=" flex flex-1 items-center justify-center  md:justify-end space-x-6 mx-auto px-0">
          {/* language select */}
          {session ? (
            <>
              <Link href={"/chat"} prefetch={false}>
                <MessageSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link href="/pricing">Pricing</Link>
          )}
          {/* session */}
          <DarkModeToogle />
          <UserButton session={session} />
        </div>
      </nav>
      {/* upgrade banner */}
    </header>
  );
}

export default Header;
