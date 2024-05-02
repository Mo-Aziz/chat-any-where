import Image from "next/image";
import Link from "next/link";
import homeImage from "@/images/landingPage/3d-delivery-robot-working.jpg"
export default function Home() {
  return (
    <main>
      <div className="relative isolate  pt-14 dark:bg-gray-900">
        <div
          className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blue-3xl"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.875rem]" />
        </div>
        <div className="py-12 sm:py-20 lg:pb-40">
          <div className="max-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Chat with Anyone, anywhere!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                You Speak your language, they can speak any language.{" "}
                <span className="text-indigo-600 dark:text-indigo-500">
                  Let AI handle the translation on your behalf.
                </span>
              </p>
              <div className=" mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/chat"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:ouline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
                <Link href="/pricing" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300 dark:hover: text-gray-900"> View Pricing<span className="animate-bounce" aria-hidden="true"> --></span></Link>
              </div>
            </div>
            {/* home page image */}
            <div className="mt-16 flow-root sm:mt-24">
              <div>
                <Image src={homeImage} alt="homepage image" width={1000} height={500}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
