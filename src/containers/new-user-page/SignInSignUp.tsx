import GoogleSignInButton from '@/components/main/GoogleSignInButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getServerSession } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import authOptions from '@/app/utils/auth';
import { AccountNewUser } from '@/containers/user-pages/AccountNewUser';
import { validateAccount } from '@/actions/main/accountActions';
import { redirect } from 'next/navigation';

export async function SignInSignUp() {
  const session = await getServerSession(authOptions);
  if (session == null) {
    return (
      <div className='main_container '>
        <div className='flex justify-center mt-40'>
          <GoogleSignInButton />
        </div>
      </div>
    );
  }

  const account = await validateAccount();

  if (account?.id) {
    redirect('/');
  }

  return <AccountNewUser />;
}
