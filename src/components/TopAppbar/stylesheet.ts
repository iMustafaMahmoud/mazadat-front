import {
  makeStyles,
  createStyles,
  Theme,
  alpha,
} from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    navbar: {
      backgroundColor: "#123F87",
      //   maxHeight: "400px",
    },
    avatar: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },

    grow: {
      flexGrow: 1,
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 1),
      color: "black",

      "&:hover": {
        color: "black",
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#949494",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "50ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    buttonCreate: {
      backgroundColor: "#00B0B8",
      "&:hover": {
        backgroundColor: "#00B0B8",
      },
    },
    buttonMyCart: {
      backgroundColor: "#60A5CA",
      "&:hover": {
        backgroundColor: "#60A5CA",
      },
    },
  })
);
