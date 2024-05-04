import { validateAccount } from '@/actions/main/accountActions';
import { Header } from '@/components/header/Header';
import { Button } from '@/components/ui/button';
import {
  AccountDetailsButton,
  DesignAccountButton,
  ShopAccountButton,
} from '@/components/user_general_accounts/UserGeneralAccountsButtons';

export async function AccountDesign() {
  const user_general = await validateAccount();

  return (
    <>
      <div className='main_container'>
        <Header />
        <div className='w-[700px] mx-auto mt-20 flex'>
          <div className='w-1/4 border-r-2 border-black'>
            <div className='flex flex-col my-8 items-end mr-5 text-lg gap-2'>
              <AccountDetailsButton user_general_id={user_general?.id!} />
              <DesignAccountButton user_general_id={user_general?.id!} />
              <ShopAccountButton user_general_id={user_general?.id!} />
            </div>
          </div>
          <div className='w-4/5 flex items-center justify-center'>
            <div className='flex items-center flex-col w-64 gap-3'>
              <div>Sell 3D designs on Shapearoo</div>
              <Button variant={'outline'} className='w-full'>
                Create designer account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
