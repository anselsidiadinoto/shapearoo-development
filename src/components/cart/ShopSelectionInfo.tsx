export function ShopSelectionInfo(){
  return(
    <div className="flex h-[200px] font_primary">
      <div className="bg-gray-300 w-24 h-24 rounded-xl"></div>
      <div className="text-xs flex flex-col w-40 ml-3">
        <div className="text-sm font-semibold">
          shop name
        </div>
        <div className="mt-1">shop address</div>
        <div>Grand Indonesia unit 4011</div>
        <div>Jakarta Utara, 49990</div>
        <div className="mt-1">edit print shop</div>
      </div>
      <div className="w-36 flex flex-col text-xs ml-3">
        <div className="mb-1 mt-1">shipping preferences:</div>
        <div>shipping address</div>
        <div>Guest Guest</div>
        <div>Pulomas Utara no 14</div>
        <div>Jakarta Timur, 14344</div>
        <div className="mt-1">delivery option</div>
        <div>GO-JEK same day</div>
        <div className="font-semibold text-base mt-1">Rp. 30,000</div>
        <div className="mt-1">edit delivery option</div>
      </div>
      <div className="w-40 flex flex-col text-xs">
        <div className="mt-1 mb-1">payment preferences:</div>
        <div className="mt-1">BCA Virtual Account</div>
        <div>123098839081928390389</div>
        <div className="mt-1">Billing Address</div>
        <div>Pulomas Utara no 14</div>
        <div>Jakarta Timur, 14344</div>
        <div className="mt-1">send invoice to:</div>
        <div>same as shipping address</div>
        <div className="mt-2">edit payment preferences</div>
      </div>
    </div>
  );
};