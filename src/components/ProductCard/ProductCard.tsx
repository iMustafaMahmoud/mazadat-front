import { Box, Typography, Divider, Button } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import useStyles from "./stylesheet";

export default function ProductCard() {
  const classes = useStyles();
  return (
    <Box display="flex" marginTop="25px">
      <Box border="3px solid #F6F7F8" padding="35px 15px">
        <img src="/assets/images/laptop.png" alt="" />
      </Box>
      <Box marginLeft="2%">
        <Typography variant="subtitle1">
          <Box component="span" fontWeight="bold">
            Lorem Ipsum is simply dummy text - Black
          </Box>
        </Typography>
        <Box display="flex" width="100%" mt={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <StarIcon htmlColor="#FFC600" />
            <StarIcon htmlColor="#FFC600" />
            <StarIcon htmlColor="#FFC600" />
            <StarIcon htmlColor="#FFC600" />
            <StarIcon />
          </Box>
          <Box ml={2}>
            <Typography variant="subtitle2">0 Reviews</Typography>
          </Box>
          <Box ml={2}>
            <Typography variant="subtitle2">
              <Box component="span" color="#00B0B8">
                only 4 left in stock - order soon
              </Box>
            </Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Divider />
        </Box>
        <Box display="flex" mt={2}>
          <Typography variant="subtitle2" className={classes.discountText}>
            $499
          </Typography>
          <Box ml={2} color="#C1C8CE">
            <Typography variant="subtitle2" className={classes.beforeDiscount}>
              $599
            </Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="subtitle2">
            lorem lorem lorem lorem lorem lorem
          </Typography>
        </Box>
        <Box display="flex" color="#123F87" mt={2}>
          <Button
            className={classes.cartButton}
            startIcon={
              <img
                className={classes.cartIcon}
                src="/assets/images/cart-icon.svg"
                alt=""
              />
            }
          >
            Add to Cart
          </Button>
          <Box ml={2}>
            <Button className={classes.cartButton}>
              <FavoriteBorderIcon />
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}
