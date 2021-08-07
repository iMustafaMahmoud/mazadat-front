import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      maxWidth: "100%",
      maxHeight: "100%",
    },
    leftSideBox: {
      backgroundColor: "#F6F7F8",
      width: "48%",
      padding: "10px",
      marginLeft: "50%",
    },
    formControl: {
      minWidth: 120,
    },
    discountText: {
      color: "#FF4858",
    },
    beforeDiscount: {
      color: "#C1C8CE",
      textDecoration: "line-through",
    },
    cartButton: {
      backgroundColor: "#E7EBF3",
      color: "#123F87",
    },
    cartIcon: {
      color: "#123F87",
    },
  })
);
