// import React from "reat";
import { Link } from "react-router-dom";

import fondoOlvide from "../../assets/svg/imagen-login.jpg";

const OlvidePassword = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-col justify-center items-center lg:w-1/4 mr-10 md:flex-row">
          {/* <img
            src={fondoOlvide}
            alt="imagen login"
            className="relative w-0 md:w-1/2 lg:w-0 sm:w-0"
          /> */}
          <div>
            <h1 className="font-bold text-6xl text-center md:w-2/3 mx-auto">
              {" "}
              Recupera tu cuenta y disfruta de los{" "}
              <span className="text-sky-700">productos</span>
            </h1>
            <form className="p-4 mx-auto w-96 sm:px-9 mt-8 shadow-m">
              <div className="mb-5">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                  placeholder="ejemplo@micorreo.com"
                />
                <input
                  type="submit"
                  value="Ingresar"
                  className="mt-5 uppercase bg-sky-700 text-white p-2 rounded-md w-fu"
                />
                <div className="flex justify-between px-4 mt-5 text-slate-500">
                  <Link to="/registro" className="">
                    No tengo Cuenta.
                  </Link>
                  <Link to="/" className="">
                    Ya tengo Cuenta.
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-0 bg-sky-500 lg:w-3/4">
          <img src={fondoOlvide} alt="imagen login" className="h-full w-screen" />
        </div>
      </div>
    </>
  );
};

export default OlvidePassword;
