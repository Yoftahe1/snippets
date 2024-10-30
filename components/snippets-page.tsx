'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Code, Search, Star, Copy } from "lucide-react"
import Link from "next/link"

// Mock data for snippets
const mockSnippets = [
  { id: 1, title: "Quick Sort Algorithm", language: "Python", code: "def quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)", stars: 42, author: "Alice" },
  { id: 2, title: "React useEffect Hook", language: "JavaScript", code: "useEffect(() => {\n  // Effect code here\n  return () => {\n    // Cleanup code here\n  };\n}, [dependency]);", stars: 78, author: "Bob" },
  { id: 3, title: "CSS Flexbox Layout", language: "CSS", code: ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}", stars: 56, author: "Charlie" },
  { id: 4, title: "Python List Comprehension", language: "Python", code: "squares = [x**2 for x in range(10)]", stars: 35, author: "David" },
  { id: 5, title: "JavaScript Promise.all()", language: "JavaScript", code: "Promise.all([\n  fetch(url1),\n  fetch(url2)\n])\n.then(([res1, res2]) => {\n  // Handle responses\n})\n.catch(error => {\n  // Handle error\n});", stars: 92, author: "Eve" },
  { id: 6, title: "Git Merge vs Rebase", language: "Shell", code: "# Merge\ngit checkout main\ngit merge feature\n\n# Rebase\ngit checkout feature\ngit rebase main", stars: 64, author: "Frank" },
]

export function SnippetsPageComponent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('')

  const filteredSnippets = mockSnippets.filter(snippet => 
    snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedLanguage === '' || snippet.language === selectedLanguage)
  )

  const languages = [...new Set(mockSnippets.map(snippet => snippet.language))]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            <Code className="h-8 w-8 mr-2" />
            Snippets
          </h1>
          <Link href="/create-snippet" className="text-sm text-primary hover:text-primary-dark">
            Create New Snippet
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search snippets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
              icon={<Search className="h-4 w-4 text-gray-400" />}
            />
          </div>
          <div className="w-full md:w-48">
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Languages</SelectItem>
                {languages.map((lang) => (
                  <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSnippets.map((snippet) => (
            <div key={snippet.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{snippet.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{snippet.language}</span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    {snippet.stars}
                  </span>
                </div>
                <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-sm overflow-x-auto">
                  <code>{snippet.code}</code>
                </pre>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">By {snippet.author}</span>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredSnippets.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No snippets found. Try adjusting your search or filter.
          </div>
        )}
      </main>
    </div>
  )
}