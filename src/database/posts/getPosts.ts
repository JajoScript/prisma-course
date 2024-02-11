import { PrismaClient, Post } from '@prisma/client'

export default async function getPosts() {
  return new Promise<Post[]>(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient();

      const posts: Post[] = await prisma.post.findMany()

      console.info(`[🦐] Lista de publicaciones...`)
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