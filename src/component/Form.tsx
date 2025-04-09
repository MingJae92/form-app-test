import { useState } from "react";
import FormDataTypes from "../types/form.types";
import {
  FormContainer,
  FormTitle,
  StyledTextField,
  SubmitButton,
  ErrorAlert,
} from "../styles/Form.styles";
import { Typography } from "@mui/material";

function Form() {
  const [userDetails, setUserDetails] = useState<FormDataTypes>({
    name: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: string[] = [];
    if (!userDetails.name.trim()) newErrors.push("Name is required.");
    if (!userDetails.email.trim()) newErrors.push("Email is required.");
    if (!userDetails.address.trim()) newErrors.push("Address is required.");
    return newErrors;
  };

  const submitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors([]);
      console.log("Form submitted", userDetails);
      // Optional: clear form here
    }
  };

  return (
    <FormContainer component="form" onSubmit={submitData} aria-label="User Information Form">
      <FormTitle variant="h4" component="h1">
        Accessible Form
      </FormTitle>

      {errors.length > 0 && (
        <ErrorAlert severity="error" role="alert">
          <ul>
            {errors.map((err, i) => (
              <li key={i}>
                <Typography variant="body2">{err}</Typography>
              </li>
            ))}
          </ul>
        </ErrorAlert>
      )}

      <StyledTextField
        fullWidth
        id="name"
        label="Name"
        name="name"
        value={userDetails.name}
        onChange={handleInputChange}
        required
        inputProps={{ "aria-required": "true" }}
      />
      <StyledTextField
        fullWidth
        id="email"
        label="Email"
        name="email"
        value={userDetails.email}
        onChange={handleInputChange}
        required
        inputProps={{ "aria-required": "true" }}
      />
      <StyledTextField
        fullWidth
        id="address"
        label="Address"
        name="address"
        value={userDetails.address}
        onChange={handleInputChange}
        required
        inputProps={{ "aria-required": "true" }}
      />

      <SubmitButton variant="contained" type="submit" fullWidth aria-label="Submit Form">
        Submit
      </SubmitButton>
    </FormContainer>
  );
}

export default Form;
