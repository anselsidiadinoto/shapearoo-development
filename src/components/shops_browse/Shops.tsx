import { Button } from "@/components/ui/button";
import { Star, StarHalf, StarIcon } from "lucide-react";

export function Shops(){
  return (
    <div className="w-[442px] h-[167px] flex">
      <div className="w-[167px] h-[167px] bg-gray-200 rounded-xl"></div>
      <div className="ml-3 font-light text-[14px] ">
        <div className="text-base font-medium flex flex-col">Glorious 3D Print Shop </div>
        <div className="text-sm flex items-center">
          <div className="flex">
            <Star size={15}/>
            <Star size={15}/>
            <Star size={15}/>
            <Star size={15}/>
            <StarHalf size={15} />
          </div>
          <div className="text-xs">(15) ratings, (97) prints</div>
        </div>
        <div>
          <div className="mt-1">Kelapa Gading  </div>
          <div>PLA, PLS, Resin, Carbon Fiber</div>
          <div>Rp2000 - Rp3000</div>
        </div>
        <div className="flex mt-6 gap-2">
          <Button
            variant={"secondary"}
            className="p-0 h-8 w-28 font-light"
          >
            Select Shop
          </Button>        
          <Button
            variant={"secondary"}
            className="p-0 h-8 w-28 font-light"
          >
            View Shop
          </Button>        
        </div>
      </div>

    
    </div>
  )
};