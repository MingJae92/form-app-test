import { useState } from "react";
import FormDataTypes from "../types/form.types";

function Form() {
  const [userDetails, setUserDetails] = useState<FormDataTypes>({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, email, address}=userDetails
    e.preventDefault();
    if(!name || !email || !address){
      console.log("Fill out all fields", userDetails)
    }else{
      console.log("Form submitted", userDetails)
    }

    
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={submitData}>
        <label>
          name:
          <input
            onChange={handleInputChange}
            type="text"
            name="name"
            value={userDetails.name}
          />
        </label>
        <label>
          email:
          <input
            onChange={handleInputChange}
            type="text"
            name="email"
            value={userDetails.email}
          />
        </label>
        <label>
          Address:
          <input
            onChange={handleInputChange}
            type="text"
            name="address"
            value={userDetails.address}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
