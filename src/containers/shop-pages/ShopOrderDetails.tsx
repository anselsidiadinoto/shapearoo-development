export function ShopOrderDetails() {
  return (
    <div className='w-[800px] mx-auto mt-10'>
      <div className='text-sm'>
        <div>Order ID 1288378127</div>
        <div>12/24/2024</div>
        <div className='flex w-[600px] rounded-xl border-black border-[1.5px] h-32 p-4 mt-3'>
          <div className='flex w-80 border-r-[1px] border-gray-300 flex-col'>
            <div className='flex justify-between w-full'>
              <div className='w-1/3'>Customer :</div>
              <div className='w-2/3'>John Doe</div>
            </div>
            <div className='flex justify-between w-full'>
              <div className='w-1/3'>Contact :</div>
              <div className='w-2/3 flex flex-col'>
                <div>Whatsapp</div>
                <div>+627687367281</div>
              </div>
            </div>
            <div className='flex justify-between w-full'>
              <div className='w-1/3'>Payment:</div>
              <div className='w-2/3 flex flex-col'>
                <div>BCA Transfer to</div>
                <div>7787263718276638</div>
              </div>
            </div>
          </div>
          <div className='flex w-96 flex-col h-full pl-4 items-center mt-1'>
            <div className='flex justify-between w-full'>
              <div className='w-1/2'>Shipping Address :</div>
              <div className='w-1/2 flex flex-col'>
                <div>Jalan Padma 9938</div>
                <div>Gianyar, 92830</div>
                <div>Denpasar</div>
              </div>
            </div>
            <div className='flex justify-between w-full'>
              <div className='w-1/2'>Shipping Method :</div>
              <div className='w-1/2'>GoSend 72hr</div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-full text-sm h-6 border-b-[1px] border-black mb-1 mt-7'>
        <div className='w-10'>Qtd</div>
        <div className='w-64'>Items</div>
        <div className='w-48'>Print details</div>
        <div className='w-20 flex justify-end'>Subtotal</div>
        <div className='w-24 flex justify-end'>Design file</div>
        <div className='w-36 flex justify-end'>Print notes</div>
      </div>

      <div className='flex flex-col'>
        <div className='flex w-full text-sm border-b-[1px] border-black mb-1 py-2'>
          <div className='w-10'>3</div>
          <div className='w-64 flex'>
            <div className='bg-gray-300 w-20 h-20 rounded-lg'></div>
            <div className='flex flex-col text-xs ml-3'>
              <div>Eifell Tower Keychain</div>
              <div>by Hantaro2233</div>
              <div className='text-sm mt-2'>30,000</div>
            </div>
          </div>
          <div className='w-48'>
            <div className='flex'>
              <div className='text-xs'>(3)</div>
              <div className='flex flex-col text-xs ml-1'>
                <div>PLA, Blue ($0.15/gr)</div>
                <div>est. weight: 20 gr (ea. $3)</div>
                <div className='mt-1 text-sm'>60,000</div>
                <div>edit print details</div>
              </div>
            </div>
            <div className='flex'>
              <div className='text-xs'>(3)</div>
              <div className='flex flex-col text-xs ml-1'>
                <div>PLA, Blue ($0.15/gr)</div>
                <div>est. weight: 20 gr (ea. $3)</div>
                <div className='mt-1 text-sm'>60,000</div>
                <div>edit print details</div>
              </div>
            </div>
          </div>
          <div className='w-20 flex justify-end'>Rp 60,000</div>
          <div className=' w-24 flex justify-end underline text-xs'>download file</div>
          <div className='w-36 flex justify-end text-xs text-right'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus, aliquam
            architecto
          </div>
        </div>

        <div className='flex w-full text-sm border-b-[1px] border-black mb-1 py-2'>
          <div className='w-10'>3</div>
          <div className='w-64 flex'>
            <div className='bg-gray-300 w-20 h-20 rounded-lg'></div>
            <div className='flex flex-col text-xs ml-3'>
              <div>Eifell Tower Keychain</div>
              <div>by Hantaro2233</div>
              <div className='text-sm mt-2'>30,000</div>
            </div>
          </div>
          <div className='w-48'>
            <div className='flex'>
              <div className='text-xs'>(3)</div>
              <div className='flex flex-col text-xs ml-1'>
                <div>PLA, Blue ($0.15/gr)</div>
                <div>est. weight: 20 gr (ea. $3)</div>
                <div className='mt-1 text-sm'>60,000</div>
                <div>edit print details</div>
              </div>
            </div>
          </div>
          <div className='w-20 flex justify-end'>Rp 60,000</div>
          <div className=' w-24 flex justify-end underline text-xs'>download file</div>
          <div className='w-36 flex justify-end text-xs text-right'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus, aliquam
            architecto
          </div>
        </div>

        <div className='flex w-full text-sm border-b-[1px] border-black mb-1 py-2'>
          <div className='w-10'>3</div>
          <div className='w-64 flex'>
            <div className='bg-gray-300 w-20 h-20 rounded-lg'></div>
            <div className='flex flex-col text-xs ml-3'>
              <div>Eifell Tower Keychain</div>
              <div>by Hantaro2233</div>
              <div className='text-sm mt-2'>30,000</div>
            </div>
          </div>
          <div className='w-48'>
            <div className='flex'>
              <div className='text-xs'>(3)</div>
              <div className='flex flex-col text-xs ml-1'>
                <div>PLA, Blue ($0.15/gr)</div>
                <div>est. weight: 20 gr (ea. $3)</div>
                <div className='mt-1 text-sm'>60,000</div>
                <div>edit print details</div>
              </div>
            </div>
          </div>
          <div className='w-20 flex justify-end'>Rp 60,000</div>
          <div className=' w-24 flex justify-end underline text-xs'>download file</div>
          <div className='w-36 flex justify-end text-xs text-right'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus, aliquam
          </div>
        </div>
      </div>
    </div>
  );
}
