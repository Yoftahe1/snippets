import Link from "next/link";
import { Code } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Code className="h-6 w-6 mr-2" />
        <span className="font-bold text-lg">Snippets</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <ModeToggle/>
      </nav>
    </header>
  );
};

export default Navbar;
