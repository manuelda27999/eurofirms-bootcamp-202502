import { useEffect, useState } from "react";

import { logic } from "../logic";

import Posts from "./components/Posts";

export const Home = (props) => {
  const onUserLoggedOut = props.onUserLoggedOut;

  const [username, setUsername] = useState("");

  useEffect(() => {
    try {
      const username = logic.getUserUsername();

      setUsername(username);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleLogoutClick = () => {
    try {
      logic.logoutUser();

      onUserLoggedOut();
    } catch (error) {
      console.error(error);
    }
  };

  console.log("Home -> render");

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <div className="fixed bg-white flex flex-row justify-around items-center w-full pt-4 pb-2 border-b-4">
        <i className="text-5xl bg-fuchsia-800 text-white px-4 py-4 w-fit rounded-2xl mb-2">
          Logo
        </i>
        <h1 className="font-bold text-3xl">Hello, {username}!</h1>

        <button
          className="cursor-pointer border-4 rounded-xl bg-black text-white px-6 py-2 font-bold"
          type="button"
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      </div>

      <Posts />
    </div>
  );
};
