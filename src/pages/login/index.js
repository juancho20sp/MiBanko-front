import { React } from "react";
import useForm from './useForm';
import {
  RootWrapperLogin,
  MiBanko,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Rectangle4,
  Rectangle5,
  ContraseñaInput,
  CrearCuentaBtn,
  IngresarBtn,
  UsuarioInput,
  AlertUser,
  AlertPassword
} from "./LoginElements.js";
import validate from '../../hooks/validateInfo';

const Login = () => {
  const { handleChange, submitHandler, values, errors } = useForm(
    validate
  );

  return (
    <div className="form-content">
      <form onSubmit={submitHandler} className="form" noValidate>
        <RootWrapperLogin>
          <Rectangle5 />
          <MiBanko>MiBanko</MiBanko>
          <Rectangle1 />
          <Rectangle2 />
          <UsuarioInput 
            id="user" 
            name="user" 
            placeholder="Usuario"
            value={values.user}
            onChange={handleChange}
          />
           {errors.user && <AlertUser>{errors.user}</AlertUser>}
          <ContraseñaInput
            id="password"
            name="password"
            placeholder="Contraseña"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
           {errors.password && <AlertPassword>{errors.password}</AlertPassword>}
          <Rectangle3 />
          <Rectangle4 />
          <CrearCuentaBtn id="crearCuenta">Crear cuenta</CrearCuentaBtn>
          <IngresarBtn id="homeUsuario">Ingresar</IngresarBtn>
        </RootWrapperLogin>
      </form>
    </div>
  );
};

export default Login;
