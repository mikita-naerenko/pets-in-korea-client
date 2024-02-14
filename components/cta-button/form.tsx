import React, { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";

import { Form, Formik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

import { validationSchema } from "./schema";
import postEmail from "@/actions/post-email";
import { TextInput } from "./text-input";

import toast from "react-hot-toast";

export default function FormCTA({ handleClose }: { handleClose: () => void }) {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

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
  return (
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
          toast.error(error instanceof Error ? error.message : String(error));
        }
      }}
    >
      <Form autoComplete="off" noValidate>
        <Grid container spacing={3}>
          <Grid xs={12} md={12} item>
            <TextInput fullWidth label="Как к вам обращаться" name="name" />
          </Grid>
          <Grid xs={12} md={12} item>
            <TextInput fullWidth label="Ваша почта" name="email" required />
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
  );
}
