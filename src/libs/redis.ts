import { RedisClientType, createClient } from "redis";

export let redisConn: RedisClientType | null = null;

export const initialRedis = async () => {
  redisConn = createClient();
  redisConn.on("error", (err) => {
    console.log("Redis Client error", err);
  });
  await redisConn.connect();
};
