import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
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
