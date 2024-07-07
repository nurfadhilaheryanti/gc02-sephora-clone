import { ObjectId } from "mongodb";
import { getDb } from "../config";
import { hash } from "../utils/bcrypt";
import { User } from "@/types";

export type UserModelCreateInput = Omit<User, "_id">;

const COLLECTION_USER = "Users"

export const getUsers = async () => {
  const db = await getDb();


  const users = (await db
    .collection(COLLECTION_USER)
    .find()
    .project({ password: 0 })
    .toArray()) as User[];

  return users;
};

export const createUser = async (user: UserModelCreateInput) => {
  const modifiedUser: UserModelCreateInput = {
    ...user,
    password: hash(user.password),
  };

  const db = await getDb();
  const result = await db.collection(COLLECTION_USER).insertOne(modifiedUser);

  return result;
};

export const getUserById = async (id: string) => {
  const db = await getDb();
  const objectId = new ObjectId(id);

  const user = (await db.collection(COLLECTION_USER).findOne(
    { _id: objectId },
    {
      projection: {
        password: 0,
      },
    },
  )) as User;

  return user;
};

export const getUserByEmail = async (email: string) => {
  const db = await getDb();
  const user = (await db
    .collection(COLLECTION_USER)
    .findOne({ email: email })) as User;

  return user;
};
