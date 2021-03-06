import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import validate from '../../hooks/validateInfo';
import useForm from './useForm';


const CrearCuenta = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    validate
  );

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit} className="form">
        <RootWrapperCrearCuenta>
          <Rectangle5 />
          <CrearUsuario>Crear usuario</CrearUsuario>
          <Rectangle1 />
          <Rectangle10 />
          <Rectangle7 />
          <Rectangle8 />
          <Rectangle6 />
          <Rectangle11 />
          <Rectangle2 />
          <Rectangle9 />
          <Nombre name="user_name" placeholder="Nombre" />
          <TipoDeDocumento name="document_type" placeholder="TipoDeDocumento">
            <option value="" hidden>
              Tipo
            </option>
            <option value="CC">C.C</option>
            <option value="TI">T.I</option>
            <option value="CE">C.E</option>
            <option value="PS">P.S</option>
          </TipoDeDocumento>
          <Usuario name="username" placeholder="Usuario" required/>
          <Email 
            name="user" 
            placeholder="Email" 
            required
            value={values.user}
            onChange={handleChange}
          />
           {errors.user && <AlertEmail>{errors.user}</AlertEmail>}
          <Apellido name="user_lastname" placeholder="Apellido" required/>
          <NúmeroDeDocumento
            name="document_number"
            placeholder="NúmeroDeDocumento"
            type="number" required
          />
          <Contraseña
            name="password"
            placeholder="Contraseña"
            type="password" required
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <AlertPassword>{errors.password}</AlertPassword>}
          <ConfirmarContraseña
            name="confirm_password"
            placeholder="ConfirmarContraseña"
            type="password" required
            value={values.confirm_password}
            onChange={handleChange}
          />
          {errors.confirm_password && <AlertPasswordConfirm>{errors.confirm_password}</AlertPasswordConfirm>}
          <Rectangle3 />
          <CrearCuentaBtn>Crear cuenta</CrearCuentaBtn>
        </RootWrapperCrearCuenta>
      </form>
    </div>
  );
};
export default CrearCuenta;
const AlertEmail = styled.p`
background: #F00741;
font-size: 25px;
font-family: Roboto, sans-serif;
font-weight: 400;
text-align: left;
position: absolute;
left: 795px;
top: 590px;
`;
const AlertPassword = styled.p`
background: #F00741;
font-size: 25px;
font-family: Roboto, sans-serif;
font-weight: 400;
text-align: left;
position: absolute;
left: 202px;
top: 700px;
`;
const AlertPasswordConfirm = styled.p`
background: #F00741;
font-size: 25px;
font-family: Roboto, sans-serif;
font-weight: 400;
text-align: left;
position: absolute;
left: 802px;
top: 700px;
`;
const RootWrapperCrearCuenta = styled.div`
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
`;

const Rectangle5 = styled.div`
  width: 1257px;
  height: 603px;
  background-color: rgba(196, 196, 196, 0.3);
  border: solid 1px rgba(0, 0, 0, 1);
  border-radius: 20px;
  position: absolute;
  left: 127px;
  top: 283px;
`;

const CrearUsuario = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 60px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 576px;
  top: 179px;
`;

const Rectangle1 = styled.div`
  width: 562px;
  height: 70px;
  background-color: rgba(196, 196, 196, 1);
  border-radius: 20px;
  position: absolute;
  left: 178px;
  top: 453px;
`;

const Rectangle10 = styled.div`
  width: 562px;
  height: 70px;
  background-color: rgba(196, 196, 196, 1);
  border-radius: 20px;
  position: absolute;
  left: 179px;
  top: 351px;
`;

const Rectangle7 = styled.div`
  width: 562px;
  height: 70px;
  background-color: rgba(196, 196, 196, 1);
  border-radius: 20px;
  position: absolute;
  left: 178px;
  top: 549px;
`;

const Rectangle8 = styled.div`
  width: 562px;
  height: 70px;
  background-color: rgba(196, 196, 196, 1);
  border-radius: 20px;
  position: absolute;
  left: 768px;
  top: 543px;
`;

const Rectangle6 = styled.div`
  width: 562px;
  height: 70px;
  background-color: rgba(196, 196, 196, 1);
  border-radius: 20px;
  position: absolute;
  left: 768px;
  top: 447px;
`;

const Rectangle11 = styled.div`
  width: 562px;
  height: 70px;
  background-color: rgba(196, 196, 196, 1);
  border-radius: 20px;
  position: absolute;
  left: 769px;
  top: 345px;
`;

const Rectangle2 = styled.div`
  width: 562px;
  height: 70px;
  background-color: rgba(196, 196, 196, 1);
  border-radius: 20px;
  position: absolute;
  left: 178px;
  top: 656px;
`;

const Rectangle9 = styled.div`
  width: 562px;
  height: 70px;
  background-color: rgba(196, 196, 196, 1);
  border-radius: 20px;
  position: absolute;
  left: 768px;
  top: 651px;
`;

const Nombre = styled.input`
  background: rgba(196, 196, 196, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 204px;
  top: 465px;
`;

const TipoDeDocumento = styled.select`
  background: rgba(196, 196, 196, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 205px;
  top: 363px;
  width: 490px;
`;

const Usuario = styled.input`
  background: rgba(196, 196, 196, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 204px;
  top: 561px;
`;

const Email = styled.input`
  background: rgba(196, 196, 196, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 794px;
  top: 555px;
`;

const Apellido = styled.input`
  background: rgba(196, 196, 196, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 794px;
  top: 459px;
`;

const NúmeroDeDocumento = styled.input`
  background: rgba(196, 196, 196, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 795px;
  top: 357px;
`;

const Contraseña = styled.input`
  background: rgba(196, 196, 196, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 204px;
  top: 668px;
`;

const ConfirmarContraseña = styled.input`
  background: rgba(196, 196, 196, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 794px;
  top: 663px;
`;

const Rectangle3 = styled.div`
  width: 262px;
  height: 61px;
  background-color: rgba(113, 107, 107, 1);
  border-radius: 20px;
  position: absolute;
  left: 622px;
  top: 763px;
`;

const CrearCuentaBtn = styled.button`
  background-color: rgba(113, 107, 107, 1);
  color: rgba(255, 255, 255, 1);
  text-overflow: ellipsis;
  font-size: 30px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 667px;
  top: 776px;
`;