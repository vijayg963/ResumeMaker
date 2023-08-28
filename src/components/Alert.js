import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ submitStatus }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={5} sx={{ width: "18%" }}>
      <span onClick={handleClick}>Submit</span>
      {submitStatus ? (
        <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
          <Alert   onClose={handleClose} severity="success">
            Form submitted success!
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Form submitted Fail !
          </Alert>
        </Snackbar>
      )}
    </Stack>
  );
}
