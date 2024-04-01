import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function DesignDetails(){
  return (
    <div className="h-[320px] w-4/5 mx-auto mt-24 flex gap-20">
      <div className="w-1/2 h-full flex justify-center items-center">
        <Carousel className="w-80">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 bg-gray-200 ">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="w-1/2 h-full flex flex-col text-sm">
        <div className="text-xl">
          Eifell Tower Key Chain
        </div>
        <div className="text-sm">By Hantaro2203</div>
        <div>Rating</div>
        <div className="mt-3 mb-3 font-semibold text-lg">Rp.30000</div>
        <div>The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower</div>
        <div className="mt-3">
          <div>Weight += 70 grams (PLA)</div>
          <div>est. print price = Rp 70000</div>
        </div>
        <div className="mt-5 flex justify-center">
           <Button variant={"secondary"} className="w-40">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
};