import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export function SearchBar(){
  return (
    <div className="w-full h-8 flex justify-between font_primary font-thin" >
      <Input className="h-full w-80"/>
      <Button className="h-full font-thin" variant={"outline"}>
        search
      </Button>
      <div className="w-14 flex items-center">Sort by:</div>
      <Select>
        <SelectTrigger className="w-24 h-full">
          <SelectValue placeholder="price"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lowest" className="text-xs font-light">least $</SelectItem>
          <SelectItem value="highest" className="text-xs font-light">most $</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-24 h-full">
          <SelectValue placeholder="location"/>
        </SelectTrigger>
        <SelectContent className="text-sm">
          <SelectItem value="lowest" className="text-xs font-light">closest</SelectItem>
          <SelectItem value="highest" className="text-xs font-light">furthest</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-24 h-full">
          <SelectValue placeholder="category"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lowest" className="text-xs font-light">toys</SelectItem>
          <SelectItem value="highest" className="text-xs font-light">serious</SelectItem>
        </SelectContent>
      </Select>
      <div className="w-28 flex items-center justify-end">
        Cart: 4 designs
      </div>
    </div>
  )
};