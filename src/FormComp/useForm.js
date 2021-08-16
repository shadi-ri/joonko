import React, { useState } from "react";

const useForm = validate => {
  const [inputs, setInputs] = useState({
    fullname: "",
    companyname: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    if(e){
      e.preventDefault();
    }
    setErrors(validate(inputs));
  };

  return { handleChange, inputs, handleSubmit, errors };
};

export default useForm;
