import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Login.css";

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("currentUser", JSON.stringify(data));
    setCurrentUser(data);
    navigate("/");
  };

  return (
    <div className="login-contentainer d-flex align-items-center">
      <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mb-4">Login</h1>
        <input
          type="text"
          {...register("username", {
            required: "Debe igresar su nombre de usuario",
          })}
          placeholder="Usuario"
          className={`${errors.username && "error"}`}
        />
        <p className="label-error">{errors.username?.message}</p>
        <input
          type="password"
          {...register("password", { required: "Debe igresar su contraseña" })}
          placeholder="Contraseña"
          className={`${errors.password && "error"}`}
        />
        <p className="label-error">{errors.password?.message}</p>
        <input type="submit" value="Iniciar Sesión" />
      </form>
    </div>
  );
};

export default Login;
