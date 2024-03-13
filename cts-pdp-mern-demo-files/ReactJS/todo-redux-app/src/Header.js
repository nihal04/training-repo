import React from "react";
import {
  Button,
  AppBar,
  IconButton,
  Typography,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
export default function Header() {
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
    <div>
      
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task List
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
      {/* <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{horizontal: "right", vertical: "top"}} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar> */}
    </div>
  );
}
