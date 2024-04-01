import { Button } from "@/components/ui/button";

export function ShopDetails(){
  return (
    <div className="h-[285px] w-full mt-8 flex gap-5">
      <div className="h-full w-1/3 flex flex-wrap gap-4 content-start">
        <div className="bg-gray-200 w-[135px] h-[135px] rounded-xl"></div>
        <div className="bg-gray-200 w-[135px] h-[135px] rounded-xl"></div>
        <div className="bg-gray-200 w-[135px] h-[135px] rounded-xl"></div>
        <div className="bg-gray-200 w-[135px] h-[135px] rounded-xl"></div>
      </div>     
      <div className="h-full w-1/3 text-sm">
        <div className="text-lg">Hantaro2233</div>
        <div className="text-xs">joined shapearoo in 2023</div>
        <div className="mt-2">LinkedIn, website, instagram</div>
        <div className="mt-3">
          3D Printlife is committed to improving sustainability in 3D printing. We manufacture innovative biodegradable and eco-friendly 3d filaments in the USA, and we offer a curated collection of 3d printers, filaments, photopolymers, and accessories from some of the top manufacturers in the industry.
        </div>
      </div>     
      <div className="h-full w-1/3 text-sm">
        <div className="text-lg">Shop Info</div>
        <div className="mt-2">Available Print Materials</div>
        <div className="flex gap-2">
          <div>PLA</div>
          <div>PLS</div>
          <div>Resin</div>
        </div>
        <div className="mt-2">Available Colors</div>
        <div className="flex flex-wrap gap-x-3 content-start">
            <div>Blue</div>
            <div>Red</div>
            <div>Green</div>
            <div>Yellow</div>
            <div>Purple</div>
            <div>Magenta</div>
            <div>White</div>
            <div>Black</div>
        </div>
        <div className="mt-5 flex justify-start">
           <Button variant={"secondary"} className="w-40">
            Select Shop
          </Button>
        </div>
        <div className="mt-2 flex justify-start">
           <Button variant={"secondary"} className="w-40">
            Message
          </Button>
        </div>
      </div>     
    </div>
  )
};