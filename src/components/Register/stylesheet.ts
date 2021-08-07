import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    textInput: {
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#2699fb",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#2699fb",
      },
      "& .MuiInputBase-root": {
        backgroundColor: "#F1F9FF",
      },
    },
    loginButton: {
      height: "50px",
    },
  })
);
