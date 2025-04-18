import type {PrismaClient} from "@prisma/client";

export async function userSeeder(prisma: PrismaClient) {
  return prisma.user.upsert({
    where:  {email: 'josh@hexbytelabs.com'},
    update: {},
    create: {
      email:      'josh@hexbytelabs.com',
      first_name: 'Josh',
      last_name:  'Evensen',
      auth_id:    'abc',
      stripe_id:  '12345',
      is_admin:   true,
    },
  });
}
