import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48  flex justify-center">
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Save, Organize, and Share Your Code Snippets
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Snippets is the perfect tool for developers to store, manage, and
              collaborate on code snippets. Boost your productivity today!
            </p>
          </div>
          <div className="space-x-4">
            <Button variant={"outline"}>
              <Link href={"/snippets"}>Snippets</Link>
            </Button>
            <Button>
              <Link href={"/new"}>Create Snippet</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
