import { useField } from "formik";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export const TextInput = ({
  ...props
}: {
  name: string;
  label: string;
  fullWidth: boolean;
  required?: boolean;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField {...field} {...props} />
      {meta.touched && meta.error ? (
        <Typography color="error">{meta.error}</Typography>
      ) : null}
    </>
  );
};
