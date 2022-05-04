import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SetCookie from "../../hooks/setCookie";
import RemoveCookie from "../../hooks/removeCookie.js";
import Swal from "sweetalert2";

const useForm = (validate) => {
  let history = useNavigate();
  const [values, setValues] = useState({
    password: '',
    confirm_password: ''
  });
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setData(data);
    setErrors(validate(values));
    setIsSubmitting(true);
  };
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        let location = "api/v1/users";
        let body = {};
        body = {
          user: {
            user_name: data.get("user_name"),
            user_lastname: data.get("user_lastname"),
            document_type: data.get("document_type"),
            document_number: Number(data.get("document_number")),
            role: "CLIENT",
            username: data.get("username"),
            email: data.get("email"),
            password: values.password,
          },
        };
        console.log(body)
        // axios
        //   .post(window.$dir + location + `/createUser`, body)
        //   .then(function (response) {
        //     if (response.status === 200) {
        //       Swal.fire("Creado correctamente", "success");
        //       history('/');
        //     } else {
        //       Swal.fire("Something is Wrong :(!", "try again later", "error");
        //     }
        //   });
        }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;