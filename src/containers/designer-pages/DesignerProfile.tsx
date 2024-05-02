import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function DesignerProfile() {
  return (
    <div className='flex flex-col w-[600px] mx-auto mt-16'>
      <div className='flex justify-between items-center'>
        <div className='text-lg'>Designer profile status: live</div>
        <div className='flex gap-2'>
          <Button variant={'outline'}>View live profile</Button>
          <Button variant={'outline'}>Hide shop</Button>
        </div>
      </div>

      <div className='flex justify-between gap-4 mt-8'>
        <div className=' w-1/2'>
          <div className='bg-gray-200 w-[285px] h-[285px] rounded-xl'></div>

          <div className='flex flex-wrap gap-4 content-start mt-4'>
            <div className='bg-gray-200 w-[135px] h-[135px] rounded-xl'></div>
            <div className='bg-gray-200 w-[135px] h-[135px] rounded-xl'></div>
            <div className='bg-gray-200 w-[135px] h-[135px] rounded-xl'></div>
            <div className='bg-gray-200 w-[135px] h-[135px] rounded-xl'></div>
          </div>
        </div>

        <div className='w-1/2 flex flex-col gap-3'>
          <div>
            <div className='text-xl border-gray border-2 p-1'>Hantaro2233</div>
            <div className='text-xs underline mt-1'>edit designer name</div>
          </div>

          <div>
            <div className='text-sm border-gray border-2 p-1 h-44'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ullam facilis quis
              ad, vitae repellat officiis delectus dignissimos quia perspiciatis, corporis eaque
              quibusdam modi ducimus laborum ipsa nihil cumque harum.
            </div>
            <div className='text-xs underline mt-1'>edit profile description</div>
          </div>
          <div className='mt-5 flex flex-col gap-3'>
            <Button variant={'outline'}>reset profile</Button>
            <Button variant={'outline'}>delete designer account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
