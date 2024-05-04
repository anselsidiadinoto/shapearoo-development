'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export function SignInSignUpButton() {
  return (
    <Button variant={'link'} className='p-0 h-10 text-primary font-normal text-lg'>
      <Link href='/auth/validate'>Sign In / Sign Up</Link>
    </Button>
  );
}

export function SignOutButton() {
  return (
    <Button
      variant={'link'}
      className='p-0 h-10 text-primary font-normal text-lg text-gray-300'
      onClick={() => signOut()}
    >
      Sign Out
    </Button>
  );
}

export function AccountButton({ user_general_id }: { user_general_id: string }) {
  return (
    <Button variant={'link'} className='p-0 h-10 text-primary font-normal text-lg text-gray-300'>
      <Link href={`/user/${user_general_id}/details`}>Account</Link>
    </Button>
  );
}

export function DesignsButton({ user_general_id }: { user_general_id: string }) {
  return (
    <Button variant={'link'} className='p-0 h-10 text-primary font-normal text-lg text-gray-300'>
      <Link href={`/user/${user_general_id}/details`}>Account</Link>
    </Button>
  );
}
