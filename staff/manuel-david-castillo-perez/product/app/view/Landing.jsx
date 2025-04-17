export const Landing = (props) => {
  const onRegisterClicked = props.onRegisterClicked;
  const onLoginClicked = props.onLoginClicked;

  const handleRegisterClick = () => onRegisterClicked();

  const handleLoginClick = () => onLoginClicked();

  console.log("Landing -> render");

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <i className="text-5xl bg-fuchsia-800 text-white px-4 py-4 w-fit rounded-2xl mb-2">
        Logo
      </i>

      <div>
        <a
          className="underline text-blue-700 font-bold"
          href="#"
          onClick={handleRegisterClick}
        >
          Register
        </a>
        &nbsp;or&nbsp;
        <a
          className="underline text-blue-700 font-bold"
          href="#"
          onClick={handleLoginClick}
        >
          Login
        </a>
      </div>
    </div>
  );
};
