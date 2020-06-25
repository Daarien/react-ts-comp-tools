import React from "react";

const FormControlContext = React.createContext({});

if (process.env.NODE_ENV !== "production") {
  FormControlContext.displayName = "FormControlContext";
}

export default FormControlContext;
