import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ShopProfile() {
  return (
    <div className="flex flex-col w-[600px] mx-auto mt-16">
      <div className="flex justify-between items-center">
        <div className="text-lg">Shop status: live</div>
        <div className="flex gap-2">
          <Button variant={'outline'}>View live shop</Button>
          <Button variant={'outline'}>Hide shop</Button>
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-8">
        <div className=" w-1/2">
          <div className="flex flex-wrap gap-4 content-start">
            <div className="bg-gray-200 w-[135px] h-[135px] rounded-xl"></div>
            <div className="bg-gray-200 w-[135px] h-[135px] rounded-xl"></div>
            <div className="bg-gray-200 w-[135px] h-[135px] rounded-xl"></div>
            <div className="bg-gray-200 w-[135px] h-[135px] rounded-xl"></div>
          </div>
          <div className="">
            <div className="text-xl mt-5">Print Options</div>
            <div className="text-xs underline mt-1">edit print options</div>

            <div className="flex flex-col mt-3 gap-2">
              <div className="flex">
                <div className="flex flex-wrap gap-x-3 content-start text-sm">
                  <div>Blue</div>
                  <div>Red</div>
                  <div>Green</div>
                  <div>Yellow</div>
                  <div>Purple</div>
                  <div>Gold</div>
                  <div>Magenta</div>
                  <div>White</div>
                  <div>Black</div>
                </div>
                <div className="w-48 text-right">$15.000/gr</div>
              </div>
              <div className="flex">
                <div className="flex flex-wrap gap-x-3 content-start text-sm">
                  <div>Blue</div>
                  <div>Red</div>
                  <div>Green</div>
                  <div>Yellow</div>
                  <div>Purple</div>
                  <div>Gold</div>
                  <div>Magenta</div>
                  <div>White</div>
                  <div>Black</div>
                </div>
                <div className="w-48 text-right">$15.000/gr</div>
              </div>
              <div className="flex">
                <div className="flex flex-wrap gap-x-3 content-start text-sm">
                  <div>Blue</div>
                  <div>Red</div>
                  <div>Green</div>
                  <div>Yellow</div>
                  <div>Purple</div>
                  <div>Gold</div>
                  <div>Magenta</div>
                  <div>White</div>
                  <div>Black</div>
                </div>
                <div className="w-48 text-right">$15.000/gr</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-3">
          <div>
            <div className="text-xl border-gray border-2 p-1">Hantaro2233</div>
            <div className="text-xs underline mt-1">edit shop name</div>
          </div>
          <div>
            <div className="text-sm border-gray border-2 p-1">hantaro2233@gmail.com</div>
            <div className="text-xs underline mt-1">edit shop email</div>
          </div>
          <div>
            <div className="text-sm border-gray border-2 p-1">Gianyar, Bali</div>
            <div className="text-xs underline mt-1">edit location</div>
          </div>
          <div className="flex gap-1 flex-col">
            <div className="text-sm border-gray border-2 p-1">Jalan padma x 123</div>
            <div className="text-sm border-gray border-2 p-1">Gianyar, 12393</div>
            <div className="text-sm border-gray border-2 p-1">Denpasar</div>
            <div className="text-xs underline">edit address</div>
          </div>
          <div>
            <div className="text-sm border-gray border-2 p-1 h-44">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ullam facilis quis
              ad, vitae repellat officiis delectus dignissimos quia perspiciatis, corporis eaque
              quibusdam modi ducimus laborum ipsa nihil cumque harum.
            </div>
            <div className="text-xs underline mt-1">edit description</div>
          </div>
          <div className="mt-5 flex flex-col gap-3">
            <Button variant={'outline'}>reset shop</Button>
            <Button variant={'outline'}>delete shop account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
