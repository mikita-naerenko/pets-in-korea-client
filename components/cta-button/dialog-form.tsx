import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import FormCTA from "./form";
import { MODAL_DIALOG_TEXT } from "./consts";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogForm({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
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
          {MODAL_DIALOG_TEXT}
        </DialogContentText>
        {open ? <FormCTA handleClose={handleClose} /> : null}
      </DialogContent>
    </Dialog>
  );
}
