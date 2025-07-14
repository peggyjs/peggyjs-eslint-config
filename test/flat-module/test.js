export function hello() {
  try {
    if (new Date().getTime() % 2 === 0) {
      throw new Error("Bye");
    }
    return "Hello";
  } catch (er) {
    const a = (() => "foo")();
    er.cause = a;
    throw er;
  }
}
