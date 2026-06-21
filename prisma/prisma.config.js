import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: './schema.prisma',
  migrations: {
    databaseUrl: process.env.DATABASE_URL,
  },
})