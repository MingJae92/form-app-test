// src/styles/Form.styles.ts
import { styled } from "@mui/material/styles";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";

export const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: "500px",
  margin: "auto",
  padding: theme.spacing(4),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: "bold",
  textAlign: "center",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const ErrorAlert = styled(Alert)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
