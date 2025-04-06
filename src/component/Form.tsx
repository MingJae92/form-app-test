import { useState } from "react";
import FormDataTypes from "../types/form.types";

function Form() {
  const [userDetails, setUserDetails] = useState<FormDataTypes>({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {

   setUserDetails()
  };

  return (
    <div>
      <form>Form</form>
    </div>
  );
}

export default Form;
