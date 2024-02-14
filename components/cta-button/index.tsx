import * as React from "react";
import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import Tooltip from "@mui/material/Tooltip";

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

export default function CTAButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            {MODAL_DIALOG_TEXT}
          </DialogContentText>
          <FormCTA handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
