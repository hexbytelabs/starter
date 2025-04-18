import {PrismaClient} from "@prisma/client";
import seeder from "../src/seeders";

const prisma = new PrismaClient()

async function main() {
  await seeder(prisma)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
