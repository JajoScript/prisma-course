import {
  createUser,
  deleteUserById,
  deleteUsersByFirstName,
  getUserById,
  getUserByIdOrEmail,
  getUsers,
  updateUserById,
  updateUsersByFirstName,
  upsertUserById
} from './src/database/users/index.js'


async function main() {
  try {
    // * -- Crear un usuario.
    // await createUser({
    //   firstName: "Sebastian",
    //   lastName: "Ramirez",
    //   email: "seba2000@gmail.com"
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

  } catch (err) {
    return;
  }
}

main();