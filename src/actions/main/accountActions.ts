'use server';
import authOptions from '@/app/utils/auth';
import { db } from '@/db/db';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { signIn, signOut } from 'next-auth/react';

export async function validateAccount() {
  const session = await getServerSession(authOptions);

  if (session === null) {
    return null;
  }

  const account = await db
    .selectFrom('User_general')
    .select(['id', 'email', 'name'])
    .where('userId', '=', session!.user.id)
    .executeTakeFirst();

  return {
    id: account?.id,
    name: account?.name,
    email: account?.email,
  };
}

export async function createGeneralAccount(form: FormData) {
  const account_email = form.get('email') as string;
  const account_name = form.get('name') as string;
  const account_google_id = form.get('google_id') as string;

  const insertIntoDatabase = await db
    .insertInto('User_general')
    .values({
      email: account_email,
      name: account_name,
      userId: account_google_id,
    })
    .execute();

  redirect('/');
}
