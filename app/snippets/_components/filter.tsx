import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filter = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Search snippets..."
          className="w-full"
        />
      </div>
      <div className="w-full md:w-48">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filter by language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="javascript">React</SelectItem>
            <SelectItem value="python">React Native</SelectItem>
            <SelectItem value="java">Next</SelectItem>
            <SelectItem value="csharp">Flutter</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
