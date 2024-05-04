import { validateAccount } from '@/actions/main/accountActions';
import {
  AccountButton,
  SignInSignUpButton,
  SignOutButton,
} from '@/components/navigation/NavButtons';
import { Button } from '@/components/ui/button';
import { getServerSession } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import authOptions from '@/app/utils/auth';

export async function Header() {
  const user_general = await validateAccount();

  // console.log(user_general);

  return (
    <div className='w-full flex flex-col font_primary mt-8 mb-6'>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='flex items-end text-xl gap-2'>
              {user_general ? (
                <>
                  <div className='flex items-center text-xl mr-2 h-10 text-primary font-normal'>
                    hi, {user_general.name}
                  </div>
                  <SignOutButton />
                  <AccountButton user_general_id={user_general.id!} />
                </>
              ) : (
                <SignInSignUpButton />
              )}
            </div>
            <div className='flex gap-2 items-end font_nav_inactive pb-[1px] font-bold'>
              {/* <div>about</div> */}
              {/* <div>help</div> */}
            </div>
          </div>
          <div className='flex gap-2 items-end font_nav_inactive'>
            <div>designs</div>
            <div>shops</div>
            <div>orders</div>
            <div>lists</div>
            <div>cart</div>
          </div>
        </div>
        <div className='flex items-end text-primary text-5xl font-light tracking-tighter'>
          Shapearoo
        </div>
      </div>
    </div>
  );
}
