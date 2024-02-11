import { PrismaClient } from '@prisma/client';

export default async function getUsersWithPosts() {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma = new PrismaClient();

      const users = await prisma.user.findMany({
        include: {
          posts: true
        }
      });

      console.info("🦐 Lista de publicaciones por usuario:")
      users.map((user) => {
        user.posts.map((post) => {
          console.info(`-----`)
          console.info(`[${post.title}] by ${user.email}`)
          console.info(`${post.content}`)
          console.info(`-----`)
        })
      })

      return resolve(users);
    } catch (err) {
      return reject(err)
    }
  })
}