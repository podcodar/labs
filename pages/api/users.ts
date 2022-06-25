// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import * as users from "~/services/users";

interface UserResp {
  users: User[];
}

/**
 * @swagger
 * /api/users:
 *   get:
 *     description: Returns a list of users saved
 *     responses:
 *       200:
 *         description: list of users
 */
export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<UserResp>
) {
  res.status(200).json({ users: await users.getUsers() });
}
