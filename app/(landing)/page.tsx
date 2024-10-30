import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import Snippets from "./_components/snippets";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">Snippets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant={"outline"}>
            <Link href={"/new"}>Create Snippet</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48  flex justify-center">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Save, Organize, and Share Your Code Snippets
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Snippets is the perfect tool for developers to store, manage,
                  and collaborate on code snippets. Boost your productivity
                  today!
                </p>
              </div>
              <div className="space-x-4">
                <Button>
                  <Link href={"/snippets"}>Snippets</Link>
                </Button>
                <Button variant={"outline"}>
                  <Link href={"/new"}>Create Snippet</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Snippets />
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Snippets. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Page;
