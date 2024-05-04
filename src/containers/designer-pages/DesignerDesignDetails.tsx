import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function DesignerDesignDetails() {
  return (
    <div className='w-[717px] mx-auto mt-10 '>
      <div className='flex gap-3 border-b-[1px] w-full border-black p-2'>
        <div>Design Details</div>
      </div>

      <div className='w-[650px] mx-auto mt-6 flex text-sm'>
        <div className='w-3/5 grid grid-cols-4 gap-1'>
          <div className='flex items-center'>name: </div>
          <div className='col-span-3'>
            <Input type='text' className='h-full' />
          </div>
          <div></div>
          <div className='col-span-3 text-sm underline mb-3'>edit name</div>

          <div className='mt-1'>description: </div>
          <div className='col-span-3 h-40'>
            <Textarea className='h-full' />
          </div>
          <div></div>
          <div className='col-span-3 text-sm underline mb-3'>edit description</div>

          <div className='flex items-center'>price: </div>
          <div className=''>
            <Input type='text' className='h-full' />
          </div>
          <div className='flex h-full items-center ml-2 text-sm underline mb-3 col-span-2 '>
            edit price
          </div>

          <div className='col-span-4 h-2'></div>

          <div className='mt-1'>3D model: </div>
          <div className='flex h-full items-center ml-2 text-sm underline mb-3'>current file</div>
          <div className='flex h-full items-center ml-2 text-sm underline mb-3 col-span-2'>
            upload new file
          </div>

          <div className='col-span-4 h-2'></div>

          <div className='mt-1'>print notes: </div>
          <div className='col-span-3 h-28'>
            <Textarea className='h-full' />
          </div>
          <div></div>
          <div className='col-span-3 text-sm underline mb-3'>edit print notes</div>
        </div>

        <div className='w-2/5 ml-5'>
          <div className='mt-20'>design images:</div>
          <div className='w-full mt-4 flex flex-wrap gap-4 content-start'>
            <div className='bg-gray-200 w-[112px] h-[112px] rounded-xl'></div>
            <div className='bg-gray-200 w-[112px] h-[112px] rounded-xl'></div>
            <div className='bg-gray-200 w-[112px] h-[112px] rounded-xl'></div>
            <div className='bg-gray-200 w-[112px] h-[112px] rounded-xl'></div>
            <div className='bg-gray-200 w-[112px] h-[112px] rounded-xl'></div>
            <div className='bg-gray-200 w-[112px] h-[112px] rounded-xl'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
