import { useNavigate } from "react-router-dom";

// import imagenConfirmar from "../../svg/imagen-confirmacion.png";

const Confirmar = () => {
  const navigate = useNavigate();
  const volverInicio = () => navigate("/");
  setTimeout(() => {
    volverInicio();
  }, 4000);
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="flex flex-col justify-center items-center lg:w-2/4 md:flex-row mx-auto">
          <h1 className="font-bold text-6x1 upercasse text-center md:w-2/3 mx-auto">
            Tu cuenta ha sido confirmada, ya puedes disfrutar de los{" "}
            <span className="text-sky-700">productos</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Confirmar;