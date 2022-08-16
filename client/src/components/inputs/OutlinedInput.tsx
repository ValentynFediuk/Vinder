import React, {FC, PropsWithChildren} from 'react';
import {TextField} from "@mui/material";
import {OutlinedInputProps} from "./OutlinedInput.props";

export const OutlinedInput: FC<PropsWithChildren<OutlinedInputProps>> = ({label, type, onChange}) => {
  return (
      <TextField
          fullWidth
          variant="outlined"
          type={type}
          label={label}
          onChange={onChange}
      />
  );
};