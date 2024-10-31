import { Copy } from "lucide-react";
import { Button } from "./ui/button";

interface CardI {
  title: string;
  language: string;
  code: string;
}

const Card = ({ title, language, code }: CardI) => {
  return (
    <div className=" bg-white dark:bg-black rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>{language}</span>
        </div>
        <pre className="bg-gray-100 dark:bg-black-800 p-2 rounded text-sm overflow-auto h-[200px]">
          <code>{code}</code>
        </pre>
      </div>
      <div className=" px-4 py-3 flex justify-end items-center">
        <Button variant="ghost" size="sm" className="flex items-center">
          <Copy className="h-4 w-4 mr-2" />
          Copy
        </Button>
      </div>
    </div>
  );
};

export default Card;
