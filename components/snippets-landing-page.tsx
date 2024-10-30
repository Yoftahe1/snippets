'use client'

import { Button } from "@/components/ui/button"
import { Code, Copy, Star } from "lucide-react"
import Link from "next/link"

export function SnippetsLandingPageComponent() {
  // Sample snippet data
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
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">Snippets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Explore
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Sign In
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Save, Organize, and Share Your Code Snippets
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Snippets is the perfect tool for developers to store, manage, and collaborate on code snippets. Boost your productivity today!
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Popular Snippets</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {snippets.map((snippet, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{snippet.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <span>{snippet.language}</span>
                      <span className="flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        {snippet.stars}
                      </span>
                    </div>
                    <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm overflow-x-auto">
                      <code>{snippet.code}</code>
                    </pre>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-600 px-4 py-3 flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">By {snippet.author}</span>
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
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Snippets. All rights reserved.</p>
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
  )
}