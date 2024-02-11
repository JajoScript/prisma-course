import { Post, PrismaClient, User } from '@prisma/client';

export default async function getUsersWithPosts() {
  return new Promise<User[]>(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient();

      const users: (User & { posts: Post[] })[] = await prisma.user.findMany({
        include: {
          posts: true
        }
      });

      console.info(`[🦐] Lista de publicaciones por usuario...`);
      users.map((user) => {
        user.posts.map((post: Post) => {
          console.info(`......`);
          console.info(`[${post.title}] by ${user.email}`);
          console.info(`${post.content}`);
          console.info(`......`);
        })
      });
      console.info(`---------`);

      return resolve(users);
    } catch (err) {
      return reject(err)
    }
  })
}