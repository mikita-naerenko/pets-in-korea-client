import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import Tooltip from "@mui/material/Tooltip";
import { Formik, Form } from "formik";
import Grid from "@mui/material/Grid";
import { useField } from "formik";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import postEmail from "@/actions/post-email";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import Box from "@mui/material/Box";

const validationSchema = Yup.object({
  name: Yup.string(),
  text: Yup.string()
    .min(20, "Минимум 20 символов")
    .required("Это поле обязательное"),
  email: Yup.string().email("Некорректный адрес почты"),
});

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CTAButton() {
  const [open, setOpen] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async ({
    email,
    name,
    text,
  }: {
    email: string;
    text: string;
    name: string | undefined;
  }): Promise<Response> => {
    const res = await postEmail({ email: email, text: text, name: name });
    return res;
  };

  const TextInput = ({
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

  return (
    <React.Fragment>
      <Tooltip title="Обратная связь">
        <IconButton onClick={handleClickOpen}>
          <MailIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Обратная связь"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" mb={2}>
            Обнаружили неточность в наших материалах? Хотите предложить
            дополнения или просто выразить благодарность? Мы ценим ваше мнение!
            Пожалуйста, воспользуйтесь этой формой, чтобы поделиться своими
            мыслями с нами.
          </DialogContentText>
          <Formik
            initialValues={{
              email: "",
              text: "",
              name: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              const { name, email, text } = values;
              try {
                if (!email) {
                  throw new Error("Адрес электронной почты обязателен!");
                }
                if (!text) {
                  throw new Error(
                    "Не оставляйте поле для вашего сообщения пустым! :("
                  );
                }
                if (!captchaValue) {
                  throw new Error("Подтвердите, что вы не робот!");
                }
                onSubmit(values);
                resetForm();
                handleClose();
                toast.success("Ваше сообщение отправлено", {
                  duration: 5000,
                });
              } catch (error) {
                console.log(error);
                toast.error(
                  error instanceof Error ? error.message : String(error)
                );
              }
            }}
          >
            <Form autoComplete="off" noValidate>
              <Grid container spacing={3}>
                <Grid xs={12} md={12} item>
                  <TextInput
                    fullWidth
                    label="Как к вам обращаться"
                    name="name"
                  />
                </Grid>
                <Grid xs={12} md={12} item>
                  <TextInput
                    fullWidth
                    label="Ваша почта"
                    name="email"
                    required
                  />
                </Grid>
                <Grid xs={12} md={12} item>
                  <TextInput
                    fullWidth
                    label="Поле для ввода текста"
                    name="text"
                    required
                    multiline
                    minRows={4}
                    maxRows={30}
                  />
                </Grid>
                <Box
                  mt={2}
                  width={"100%"}
                  display={"flex"}
                  justifyContent="center"
                  sx={{ display: { xs: "flex", sm: "none" } }}
                >
                  <ReCAPTCHA
                    sitekey="6Ldtr1UpAAAAAKYB4m-5u2JvjMdWrCS5NvUX4htL"
                    onChange={(value) => setCaptchaValue(value)}
                    size="compact"
                  />
                </Box>
                <Box
                  mt={2}
                  width={"100%"}
                  display={"flex"}
                  justifyContent="center"
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  <ReCAPTCHA
                    sitekey="6Ldtr1UpAAAAAKYB4m-5u2JvjMdWrCS5NvUX4htL"
                    onChange={(value) => setCaptchaValue(value)}
                  />
                </Box>
              </Grid>
              <DialogActions>
                <Button onClick={handleClose}>Закрыть</Button>
                <Button type="submit">Отправить</Button>
              </DialogActions>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
