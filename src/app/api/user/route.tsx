import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email } = await request.json();
  //if user already exists
  const existingUser = await db
    .select()
    .from(usersTable) 
    .where(eq(usersTable.email, email));

  //if user does not exist
  if (existingUser.length == 0) {
    const newUser = await db
      .insert(usersTable)
      .values({ name, email })
      .returning();
    return NextResponse.json(newUser);
  }
  return NextResponse.json(existingUser[0]);
}
