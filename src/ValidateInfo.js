import React from "react";

export default function ValidateInfo(inputs) {
  let errors = {};

  // fullname NAME
  if (!inputs.fullname.trim()) {
    errors.firstname = "error";
  } else {
    errors.firstname = "success";
  }

 


  //COMPANY NAME
  if (!inputs.companyname) {
    errors.companyname = "error";
  } else {
    errors.companyname = "success";
  }

  //EMAIL
  if (!inputs.email) {
    errors.email = "error";
  } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
    errors.email = "error";
  } else {
    errors.email = "success";
  }

  //PHONE
  if (!inputs.phone) {
    errors.phone = "error";
  } else {
    errors.phone = "success";
  }

  return errors;
}
