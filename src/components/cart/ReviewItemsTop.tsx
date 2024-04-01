export function ReviewItemsTop(){
  return (
    <div className="flex w-full gap-3 text-sm h-6 border-b-[1px] border-black mb-1">
      <div className="w-10">Qtd</div>
      <div className="w-60">Items</div>
      <div className="w-20 flex justify-end">Subtotal</div>
      <div className="w-44">Print details</div>
      <div className="w-16 flex justify-end">Subtotal</div>
      <div className="flex-grow flex justify-end">Total</div>
    </div>
  );
};