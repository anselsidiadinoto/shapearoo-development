import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function SummaryCard(){
  return (
    <Card className="rounded-xl p-3 font_primary text-sm">
      <CardHeader className="p-0">
        <CardTitle className="text-base">Order Summary</CardTitle>
      </CardHeader>
      <Separator className="my-2"/>
      <CardContent className="p-0 text-xs">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div>Items:</div>
            <div>Rp 500,000</div>
          </div>
          <div className="flex justify-between">
            <div>Shipping:</div>
            <div>Rp 200,000</div>
          </div>
        </div>
        <Separator className="my-2"/>
        <div className="flex justify-between font-semibold">
          <div>Total:</div>
          <div>Rp 800,000</div>
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <Button 
          variant={"default"}
          className="rounded-lg w-full mt-3 text-xs h-9"
        > Place Order</Button>
      </CardFooter>

    </Card>
  );
};