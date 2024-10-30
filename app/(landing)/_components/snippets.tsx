"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const Snippets = () => {
  const snippets = [
    {
      title: "Quick Sort Algorithm",
      language: "Python",
      code: "def quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)",
      stars: 42,
      author: "Alice",
    },
    {
      title: "React useEffect Hook",
      language: "JavaScript",
      code: "useEffect(() => {\n  // Effect code here\n  return () => {\n    // Cleanup code here\n  };\n}, [dependency]);",
      stars: 78,
      author: "Bob",
    },
    {
      title: "CSS Flexbox Layout",
      language: "CSS",
      code: ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}",
      stars: 56,
      author: "Charlie",
    },
    {
      title: "Python List Comprehension",
      language: "Python",
      code: "squares = [x**2 for x in range(10)]",
      stars: 35,
      author: "David",
    },
    {
      title: "JavaScript Promise.all()",
      language: "JavaScript",
      code: "Promise.all([\n  fetch(url1),\n  fetch(url2)\n])\n.then(([res1, res2]) => {\n  // Handle responses\n})\n.catch(error => {\n  // Handle error\n});",
      stars: 92,
      author: "Eve",
    },
    {
      title: "Git Merge vs Rebase",
      language: "Shell",
      code: "# Merge\ngit checkout main\ngit merge feature\n\n# Rebase\ngit checkout feature\ngit rebase main",
      stars: 64,
      author: "Frank",
    },
  ];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-black-800 flex justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Popular Snippets
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {snippets.map((snippet, index) => (
            <div
              key={index}
              className=" bg-white dark:bg-black rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">{snippet.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{snippet.language}</span>
                </div>
                <pre className="bg-gray-100 dark:bg-black-800 p-2 rounded text-sm overflow-auto h-[200px]">
                  <code>{snippet.code}</code>
                </pre>
              </div>
              <div className=" px-4 py-3 flex justify-end items-center">
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Snippets;
