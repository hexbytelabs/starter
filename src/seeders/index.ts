import {PrismaClient} from "@prisma/client";
import {userSeeder} from "./user.seeder";

export default async function seeder(prisma: PrismaClient) {
  await userSeeder(prisma);
}
