import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getServerSession } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import authOptions from '@/app/utils/auth';
import { createGeneralAccount } from '@/actions/main/accountActions';

export async function AccountNewUser() {
  const session = await getServerSession(authOptions);

  console.log(session);

  const name = session?.user.name.split(' ')[0];

  return (
    <div className='main_container '>
      <form action={createGeneralAccount}>
        <div className='flex justify-center mt-40'>
          <div className='w-3/5 grid grid-cols-5 ml-5 gap-3 items-center '>
            <div className='col-span-2'>Email Address</div>
            <div className='col-span-3'>
              <Input type='text' name='email' defaultValue={session?.user.email} />
            </div>
            <div className='col-span-2'>Preferred Name</div>
            <div className='col-span-3'>
              <Input type='text' name='name' defaultValue={name} />
            </div>
            <div className='col-span-5'></div>
            {/* <div className='col-span-5'>Default delivery information (optional)</div>
            <div className='col-span-5'></div>
            <div className='col-span-2'>First Name</div>
            <div className='col-span-3'>
              <Input type='text' placeholder='first name' />
            </div>
            <div className='col-span-2'>Last Name</div>
            <div className='col-span-3'>
              <Input type='text' placeholder='last name' />
            </div>
            <div className='col-span-2'>Delivery Address</div>
            <div className='col-span-3'>
              <Input type='text' placeholder='line 1 (street Address)' />
            </div>
            <div className='col-span-2'></div>
            <div className='col-span-3'>
              <Input type='text' placeholder='line 2 (building/apt number)' />
            </div>
            <div className='col-span-2'></div>
            <div className='col-span-3'>
              <Input type='text' placeholder='city' />
            </div>
            <div className='col-span-2'></div>
            <div className='col-span-2'>
              <Input type='text' placeholder='state' />
            </div>
            <div className='col-span-1'></div>
            <div className='col-span-2'></div>
            <div className='col-span-2'>
              <Input type='text' placeholder='zip' />
            </div>
            <div className='col-span-5'></div> */}
            <div className='col-span-2'></div>
            <Input type='hidden' name='google_id' value={session?.user.id} />
            <div className='col-span-3'>
              <Button variant={'outline'} className='w-full mt-5' type='submit'>
                Create Shapearoo Account
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
