// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Code, Search, Star, Copy } from "lucide-react"
// import Link from "next/link"

const Filter = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
    <div className="flex-1">
      <Input
        type="text"
        placeholder="Search snippets..."
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full"
        // icon={<Search className="h-4 w-4 text-gray-400" />}
      />
    </div>
    <div className="w-full md:w-48">
      <Select 
    //   value={selectedLanguage} onValueChange={setSelectedLanguage}
      >
        <SelectTrigger>
          <SelectValue placeholder="Filter by language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="kj">All Languages</SelectItem>
          {/* {languages.map((lang) => (
            <SelectItem key={lang} value={lang}>{lang}</SelectItem>
          ))} */}
        </SelectContent>
      </Select>
    </div>
  </div>
  )
}

export default Filter