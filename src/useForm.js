import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SetCookie from "./hooks/setCookie";
import RemoveCookie from "./hooks/removeCookie.js";

const useForm = (validate) => {
  let history = useNavigate();
  const [values, setValues] = useState({
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handlers = {
    crearCuenta: handlesubmit_crearCuenta,
    homeUsuario: handlesubmit_homeUsuario,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { id } = e.nativeEvent.submitter;
    handlers[id](e);
  };

  function handlesubmit_crearCuenta(event) {
    history("/crearCuenta");
    event.target.reset();
  }

  async function handlesubmit_homeUsuario(event) {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    event.target.reset();
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
          let location = "api/v1/login";
          let body = {};
          body = {
            email: values.user,
            password: values.password,
          };
          axios.post(window.$dir + location + `/`, body)
          .then(response => response.data)
          .catch((error)=>{
            alert(error.message);
          })
          .then((response) => {
            if (response.user.token) {
              RemoveCookie('usr');
              SetCookie('usr', JSON.stringify(response.user.token));
              history("/home");
            }
          });
        }
    },
    [errors]
  );

  return { handleChange, submitHandler, values, errors };
};

export default useForm;