import { createPost, createPostWithConnect, getPosts, getPostsByUser } from "./database/posts/"
import {
  createUser,
  createUserWithInitialPost,
  deleteUserById,
  deleteUsersByFirstName,
  getUserById,
  getUserByIdOrEmail,
  getUsers,
  getUsersWithPosts,
  updateUserById,
  updateUsersByFirstName,
  upsertUserById
} from "./database/users/"

async function main() {
  try {
    // * -- Crear un usuario.
    // await createUser({
    //   firstName: "Camilo",
    //   lastName: "Sesto",
    //   email: "camilein.bombein@gmail.com"
    // });

    // * -- Buscar a todos los usuarios.
    await getUsers();

    // * -- Buscar al usuario con el id.
    // await getUserById(2);

    // * -- Buscar al primer usuario que coincida con el id o el email.
    // await getUserByIdOrEmail(23, "javierAlmarzabucarey@gmail.com")

    // * -- Eliminar un usuario por id.
    // await deleteUserById(1);

    // * -- Actualizar usuario.
    // await updateUserById(2, {
    //   email: "isi.pazpalma@gmail.com"
    // })

    // * -- Actualizar multiples usuarios por su nombre.
    // await updateUsersByFirstName("Sebastian", {
    //   firstName: "Seba"
    // })

    // * -- Eliminar multiples usuarios por su nombre.
    // await deleteUsersByFirstName("Sebastian")

    // * -- Actualizar o crear un usuario por su id.
    // await upsertUserById(20, {
    //   firstName: "Javiera",
    //   lastName: "Toro",
    //   email: "javi.toro1@gmail.com"
    // });

    // * -- Crear una publicación.
    // await createPost({
    //   title: "Mi primer post",
    //   content: "Este es el contenido de mi primer post",
    // }, 2);

    // * -- Crear un usuario con un post inicial.
    // await createUserWithInitialPost({
    //   firstName: "Roberto",
    //   lastName: "Albatros",
    //   email: "sirrobert@gmail.com"
    // });

    // * -- Obtener todos los posts.
    await getPosts();

    // * -- Obtener los posts de un usuario.
    // await getPostsByUser(2);

    // * -- Obtener usuarios con sus publicaciones.
    // await getUsersWithPosts();

    return;
  } catch (err) {
    console.error(err);
    return;
  }
}

main();