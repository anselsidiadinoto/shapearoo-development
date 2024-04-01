import authOptions from "@/app/utils/auth";
import { db } from "@/db/db";
import { getServerSession } from "next-auth";

export default async function Test(){
  const session = await getServerSession(authOptions);
  const query = await db
    .selectFrom('User')
    .selectAll()
    .execute();

  const query2 = await db
    .selectFrom('Session')
    .selectAll()
    .execute();

  return (
    <div className="flex flex-col">
      <div>
        testing ... testing ...
      </div>
      <h1>session name: {session?.user.id}</h1>
    </div>
  );
};