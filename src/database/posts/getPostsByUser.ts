import { PrismaClient, Post } from '@prisma/client';

export default async function getPostsByUser(authorId: number) {
  return new Promise<Post[]>(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient();

      const posts: Post[] = await prisma.post.findMany({
        where: {
          authorId
        }
      });

      console.info(`[🦐] Lista de publicaciones del autor...`)
      console.info(`Author: ${authorId}`)
      posts.map((post) => {
        console.info("✨ Publicación:", post);
      });
      console.info(`---------`)

      return resolve(posts);
    } catch (err) {
      return reject(err);
    }
  })
}