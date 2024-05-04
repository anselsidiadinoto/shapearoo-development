export function DesignerOrders() {
  return (
    <div className='w-[700px] mx-auto mt-16'>
      <div className='flex text-sm border-b-[2px] border-black h-6'>
        <div className='w-28'>Date</div>
        <div className='w-32'>Order details</div>
        <div className='w-64'>Items</div>
        <div className='w-28 flex justify-end'>Amount</div>
        <div className='flex flex-grow justify-end'>Status</div>
      </div>

      <div className='flex text-xs border-b-[1px] border-black py-2'>
        <div className='w-28'>12/03/2024</div>
        <div className='w-32 underline'>view details</div>
        <div className='w-64 flex flex-col gap-2'>
          <div>(4) pumkin spider , PLA White</div>
          <div>(3) Romchamp, PLA black</div>
        </div>
        <div className='w-28 flex justify-end'>Rp. 200,000</div>
        <div className='flex flex-grow justify-end'>Submitted</div>
      </div>

      <div className='flex text-xs border-b-[1px] border-black py-2'>
        <div className='w-28'>12/03/2024</div>
        <div className='w-32 underline'>view details</div>
        <div className='w-64 flex flex-col gap-2'>
          <div>(4) pumkin spider , PLA White</div>
          <div>(3) Romchamp, PLA black</div>
        </div>
        <div className='w-28 flex justify-end'>Rp. 200,000</div>
        <div className='flex flex-grow justify-end'>Submitted</div>
      </div>

      <div className='flex text-xs border-b-[1px] border-black py-2'>
        <div className='w-28'>12/03/2024</div>
        <div className='w-32 underline'>view details</div>
        <div className='w-64 flex flex-col gap-2'>
          <div>(4) pumkin spider , PLA White</div>
          <div>(3) Romchamp, PLA black</div>
        </div>
        <div className='w-28 flex justify-end'>Rp. 200,000</div>
        <div className='flex flex-grow justify-end'>Submitted</div>
      </div>
    </div>
  );
}
