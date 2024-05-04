'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type AccountButtonType = {
  user_general_id: string;
};

export function AccountDetailsButton({ user_general_id }: AccountButtonType) {
  const url = usePathname();

  let className = 'p-0 h-10 text-primary font-normal text-lg';
  if (!url.includes('details')) {
    className += ' text-gray-300';
  }

  return (
    <Button variant={'link'} className={className}>
      <Link href={`/user/${user_general_id}/details`}>Account Details</Link>
    </Button>
  );
}

export function DesignAccountButton({ user_general_id }: AccountButtonType) {
  const url = usePathname();

  let className = 'p-0 h-10 text-primary font-normal text-lg';
  if (!url.includes('design')) {
    className += ' text-gray-300';
  }

  return (
    <Button variant={'link'} className={className}>
      <Link href={`/user/${user_general_id}/design_account`}>Design Account</Link>
    </Button>
  );
}

export function ShopAccountButton({ user_general_id }: AccountButtonType) {
  const url = usePathname();

  let className = 'p-0 h-10 text-primary font-normal text-lg';
  if (!url.includes('shop')) {
    className += ' text-gray-300';
  }

  return (
    <Button variant={'link'} className={className}>
      <Link href={`/user/${user_general_id}/shop_account`}>Shop Account</Link>
    </Button>
  );
}
