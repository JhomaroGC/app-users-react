import { Link } from "react-router-dom";
import imgLogin from "../assets/svg/imagen-login.jpg";
import fondoLogin from "../assets/svg/imagen-login.jpg";

const Login = () => {
  return (
    <>
      <div className="flex w-ful">
        <div className="flex flex-col justify-center items-center lg:w-1/4 mr-10 md:flex-row">
          <img
            src={fondoLogin}
            alt="fondo login"
            className="relative w-0 md:w-1/2 lg:w-0 sm:w-0"
          />
          <div>
            <h1 className="font-bold text-6xl  text-center md:w-2/3 mx-auto">
              Ingresa y disfruta de los{" "}
              <span className="text-sky-700"> productos </span>
            </h1>
            <form className="p-4 mx-auto w-96 sm:px-9 mt-8 shadow-s">
              <div className="mb-5">
                <label htmlFor="nombre" className="font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                  placeholder="Escriba aquí su nombre"
                />
              </div>
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
              </div>
              <div>
                <label htmlFor="direccion" className="font-medium">
                  Dirección
                </label>
                <input
                  type="text"
                  id="direccion"
                  className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                  placeholder="Escriba su direccion aqui"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="font-medium">
                  Teléfono
                </label>
                <input
                  type="number"
                  id="telefono"
                  className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                  placeholder="Escriba su número de teléfono"
                />
              </div>
              <div>
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                  placeholder="*************"
                />
              </div>
              <input
                type="submit"
                value="Ingresar"
                className="uppercase mt-3 bg-sky-700 text-white p-2 rounded-md w-fu"
              />
            </form>
            <div className="flex justify-between px-4 mt-5 text-slate-500">
              <Link to="/registro" className="">
                No tengo cuenta.
              </Link>
              <Link to="/olvide-password" className="">
                Olvidé password.
              </Link>
            </div>
          </div>
        </div>
        <div className="h-full w-0 bg-sky-500 lg:w-3/4">
          <img src={imgLogin} alt="imagen login" className="h-full w-screen" />
        </div>
      </div>
    </>
  );
};

export default Login;
