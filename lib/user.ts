"use server";

import { auth } from "@clerk/nextjs";

export const fetchUserId = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  return { userId };
};
