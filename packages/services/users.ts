import { prisma } from "~/repository/db";

export async function getUsers() {
  const usersResult = await prisma.user.findMany({});
  return usersResult;
}
