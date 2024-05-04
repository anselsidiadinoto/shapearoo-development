import { validateAccount } from '@/actions/main/accountActions';
import { Header } from '@/components/header/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  AccountDetailsButton,
  DesignAccountButton,
  ShopAccountButton,
} from '@/components/user_general_accounts/UserGeneralAccountsButtons';

export async function AccountDetails() {
  const user_general = await validateAccount();

  return (
    <>
      <div className='main_container'>
        <Header />
        <div className='w-[700px] mx-auto mt-20 flex'>
          <div className='w-1/4 border-r-2 border-black'>
            <div className='flex flex-col mt-8 items-end mr-5 text-lg gap-2'>
              <AccountDetailsButton user_general_id={user_general?.id!} />
              <DesignAccountButton user_general_id={user_general?.id!} />
              <ShopAccountButton user_general_id={user_general?.id!} />
            </div>
          </div>

          <div className='w-3/4 grid grid-cols-5 ml-5 gap-3 items-center'>
            <div className='col-span-2'>First Name</div>
            <div className='col-span-3'>
              <Input type='text' placeholder='first name' />
            </div>

            <div className='col-span-2'>Last Name</div>
            <div className='col-span-3'>
              <Input type='text' placeholder='last name' />
            </div>

            <div className='col-span-2'>Email Address</div>
            <div className='col-span-3'>
              <Input type='text' placeholder='email address' />
            </div>

            <div className='col-span-2'>Default Delivery Address</div>
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
            <div className='col-span-1'></div>

            <div className='col-span-2'>Account deletion</div>
            <div className='col-span-3'>
              <Button variant={'outline'} className='w-full'>
                Delete account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
