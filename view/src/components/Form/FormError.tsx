import Alert from "@mui/joy/Alert";
import React from "react";
import { FieldError } from "react-hook-form";

const FormError: React.FC<{ label?: FieldError }> = ({ label }) => {
  if (!label) return null;

  return (
    <Alert variant="solid" color="danger">
      {label.message}
    </Alert>
  );
};

export default FormError;
