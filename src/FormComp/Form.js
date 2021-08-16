import React, { useEffect, useState } from "react";
import "./Form.css";
import useForm from "./useForm";
import validate from "../ValidateInfo";
import { API_LINK, EXPORT_PDF, API_KEY } from "../app.config";


const generateLink = async (id) => {
  const response = await fetch(`${EXPORT_PDF}?id=${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY
    }
  });
  const data = await response.json();
  const link = document.createElement('a');
  link.href = data.link;
  link.download = true;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const handleClick = (e, inputs, errors, checked) => {
  e.preventDefault();
  if(!checked){
    return;
  }
  let newInputs = { name: inputs.fullname, company_name: inputs.companyname, email: inputs.email, phone: inputs.phone };
  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY
    },
    body: JSON.stringify(newInputs)
  };

  if (isEmpty(errors) && inputs.fullname && inputs.companyname && inputs.email && inputs.phone) {
    fetch(API_LINK, requestOptions)
      .then(
        (async responseData => {
          const data = await responseData.json();
          if (responseData.status === 404) {
            //display err
          }
          if (responseData.status === 200) {
            if (data?.id === 1) {
              let link = await generateLink(data.id);
              return link;
            }
            else {
              window.href = "https://joonko.co";
            }
          }
        }
        ));
  }
}
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function Form() {
  const [state, setState] = useState({ link: "https://joonko.co",checked: false });
  const { handleChange, inputs, handleSubmit, errors } = useForm(validate);
  const handleCheckedChange = (e)  => {
    e.stopPropagation();
   if(e.target.checked) {
    setState({ checked: e.target.checked });
  }
  }


  return (
    <div className="form">
      <div className="registartion-header">
        <div className="secondary-header">
          Want to get the full version?
        </div>
        <div className="secondary-header normal">
          Fill in the form below:
        </div>
      </div>

      <form onSubmit={handleSubmit} className="second-container">
        <input
          type="text"
          name="fullname"
          placeholder="Full Name (in english)*"
          value={inputs.fullname}
          onChange={handleChange}
          className={`${errors.fullname} ? "error" : "info"`}
          autoComplete="off"
        />
        {(errors.fullname === "error" ? <p className="info" >Invalid, please try again</p> : <p></p>)}



        <input
          type="text"
          name="companyname"
          placeholder="Company Name *"
          value={inputs.companyname}
          onChange={handleChange}
          className={`${errors.companyname} ? "error" : "info"`}
          autoComplete="off"
        />
        {(errors.companyname === "error" ? <p className="info" >Invalid, please try again</p> : <p></p>)}



        <input
          type="number"
          name="phone"
          placeholder="Phone Number *"
          value={inputs.phone}
          onChange={handleChange}
          className={`${errors.phone} ? "info error" : "info"`}
          autoComplete="off"
        />
        {(errors.phone === "error" ? <p className="info"  >Invalid, please try again</p> : <p></p>)}
        <input
          type="email"
          name="email"
          placeholder="Work Email *"
          value={inputs.email}
          onChange={handleChange}
          className={`${errors.email} ? "error" : "info"`}
          autoComplete="off"
        />
        {(errors.email === "error" ? <p className="info"  >Invalid, please try again</p> : <p></p>)}
        <div className="button-container">
          <button onClick={(e) => {
            handleSubmit();
            handleClick(e, inputs, errors)
          }}
          onBlur={(e) => {handleCheckedChange}}
          >Download Now</button>
        </div>
    

      </form>
      <div className="privacy-policy">
        <input type="checkbox" onChange={handleCheckedChange} />
        <div className={`privacy-text ${ state.checked == false ? "error-checked" : ""}`}>
          I agree to the privacy policy including for Joonko to
          use my contact details to contact me for marketing
          purposes.
        </div>
      </div>
    </div>
  );
}

export default Form;
