import { v4 } from "uuid";
import { redis } from "../../redis";

export const createConfirmationUrl = async (userId: string) => {
  const token = v4();
  await redis.set(token, userId, "ex", 60 * 60 * 24);

  return `http://localhost:3000/confirm/${token}`;
};
