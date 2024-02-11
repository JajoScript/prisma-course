class createUserError extends Error {
  name: string = "createUserError";
  code: string;

  constructor(message: string, code: string) {
    super(message);
    this.code = code;
  };
};


// Exportación 🐶.
export {
  createUserError
}