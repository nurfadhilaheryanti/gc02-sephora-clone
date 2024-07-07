import jwt from "jsonwebtoken";

import * as jose from "jose";

const secretKey = process.env.SECRET_KEY || "rahasia"


export const generateToken = (payload: object) => jwt.sign(payload, secretKey);

export const verifyToken = async <T>(token: string) => {
  const key = new TextEncoder().encode(secretKey);
  const payloadJose = await jose.jwtVerify<T>(token, key);

  return payloadJose.payload;
};
