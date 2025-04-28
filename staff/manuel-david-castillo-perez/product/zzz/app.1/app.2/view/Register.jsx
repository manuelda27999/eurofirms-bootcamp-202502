import { logic } from "../logic";

export const Register = (props) => {
  const onLoginClicked = props.onLoginClicked;
  const onUserRegistered = props.onUserRegistered;

  const handleLoginClick = () => onLoginClicked();

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const username = form.username.value;
    const password = form.password.value;

    try {
      logic.registerUser(name, email, username, password);

      form.reset();

      onUserRegistered();
    } catch (error) {
      alert(error.message);
    }
  };

  console.log("Register -> render");

  return (
    <div className="flex flex-col justify-start items-center pt-10 h-screen">
      <i className="h-fit text-5xl bg-fuchsia-800 text-white px-4 py-4 rounded-2xl mb-12">
        Logo
      </i>

      <div className="flex flex-col justify-center items-center w-96">
        <h1 className="text-3xl">Register</h1>

        <form
          className="border-2 rounded-2xl px-6 py-4 flex flex-col gap-2 bg-pink-200"
          onSubmit={handleRegisterSubmit}
        >
          <div className="flex flex-col">
            <label className="font-bold" htmlFor="name">
              Name
            </label>
            <input
              className="bg-gray-100 border-2 rounded-xl px-2 py-1"
              type="text"
              id="name"
              name="name"
              placeholder="your name"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="bg-gray-100 border-2 rounded-xl px-2 py-1"
              type="email"
              id="email"
              name="email"
              placeholder="your email"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold" htmlFor="username">
              Username
            </label>
            <input
              className="bg-gray-100 border-2 rounded-xl px-2 py-1"
              type="text"
              id="username"
              name="username"
              placeholder="your username"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="bg-gray-100 border-2 rounded-xl px-2 py-1"
              type="password"
              id="password"
              name="password"
              placeholder="your password"
            />
          </div>

          <div className="flex flex-row justify-around items-center mt-2">
            <a
              className="underline text-blue-700 font-bold"
              href="#"
              onClick={handleLoginClick}
            >
              Login
            </a>

            <button
              className="cursor-pointer border-4 rounded-xl bg-black text-white px-6 py-2 font-bold"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
