import { Button } from "@/components/ui/button";

export function DesignItems(){
  return (
    <div className="w-[167px] h-56 flex flex-col">
      <div className="w-[167px] h-[167px] bg-gray-200 rounded-xl"></div>
      <div className="flex justify-between mt-2">
        <div className="flex flex-col text-xs font-light">
          <div>product title</div>
          <div>product designer</div>
          <div>Rp. 30000</div>
        </div>
        <div className="flex items-start">
          <Button
            variant={"outline"}
            className="p-0 h-[28px] w-[28px] rounded-full text-xl font-light flex justify-center items-center"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  )
};