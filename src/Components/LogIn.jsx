import { useState } from "react";
import Admin from "./Admin";
import User from "./User";
import Employee from "./Employee";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // lagt till prevent default för att sidan inte ska laddas om vid knapptryck. utan detta så laddar sidan om vid knapptryck och inputs töms = rätt sida att visas i DOM hittas ej. 
  const handleLogin = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "admin") {
      setLoggedIn(true);
    } else if (username === "personal" && password === "personal") {
      setLoggedIn(true);
    } else if (username === "kund" && password === "kund") {
      setLoggedIn(true);
    } else {
      alert("Fel användarnamn eller lösenord");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      {loggedIn ? (
        <div className="flex flex-col items-center gap-10 mt-20">
          {username === "admin" && <Admin />}
          {username === "personal" && <Employee />}
          {username === "kund" && <User />}  
          <button
            onClick={handleLogout}
            className="border border-orange-400 px-4 rounded-full bg-orange-400 h-[30px] w-[100px]"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1 className="flex justify-center mt-20 text-3xl">
            LOG<span className="text-orange-400"> IN</span>
          </h1>
          <form className="flex flex-col gap-4 items-center mb-40 mt-10">
            <label className="flex gap-4">
              Username
              <input data-test-id="input-field-username"
                type="text"
                name=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-full h-[30px] w-[300px] bg-transparent border border-orange-400"
              />
            </label>
            <label className="flex gap-5">
              Password
              <input data-test-id="input-field-password"
                type="password"
                name=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-full h-[30px] w-[300px] bg-transparent border border-orange-400"
              />
            </label>
            <button data-test-id="login-button"
              onClick={handleLogin}
              className="border border-orange-400 px-4 rounded-full bg-orange-400 h-[30px] w-[100px] mt-6"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default LogIn;
