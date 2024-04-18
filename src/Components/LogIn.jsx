import React from "react";

const LogIn = () => {
  return (
    <div>
      <h1 className="flex justify-center mt-20 text-3xl">
        LOG<span className="text-orange-400"> IN</span>
      </h1>
      <form className="flex flex-col gap-4 items-center mb-40 mt-10">
        <label className="flex gap-4">
          Username
          <input
            type="text"
            name=""
            id=""
            className="rounded-full h-[30px] w-[300px] bg-transparent border border-orange-400"
          />
        </label>
        <label className="flex gap-5">
          Password{" "}
          <input
            type="password"
            name=""
            id=""
            className="rounded-full h-[30px] w-[300px] bg-transparent border border-orange-400"
          />
        </label>
      </form>
    </div>
  );
};

export default LogIn;
