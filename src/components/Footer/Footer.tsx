import { Box, Divider, Typography } from "@material-ui/core";
import useStyles from "./stylesheet";

export default function Footer() {
  const classes = useStyles();
  return (
    <Box
      paddingX="19%"
      border="3px solid #f6f7f8"
      mt={15}
      paddingY="3%"
      width="100%"
      color="##22262A"
    >
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Box padding="10px" width="270px">
            <img src="/assets/images/mazadat-footer.png" alt="" />
            <Box mt={1}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </Typography>
            </Box>
          </Box>
          <Box padding="10px" width="270px">
            <Typography variant="subtitle1">Follow Us</Typography>
            <Box mt={2}>
              <Typography>
                Since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </Typography>
            </Box>
            <Box mt={2}>
              <img src="/assets/images/Group.svg" alt="" />
            </Box>
          </Box>
          <Box padding="10px" width="270px">
            <Typography variant="subtitle1">Contact Us</Typography>
            <Box mt={2}>
              <Typography>
                Lorem Ipsum, 457 Lorem Ipsum Road, Lorem Ipsum D04 89GR Call us
                now: 0123-456-789 Email: support@whatever.com
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box mt={2} mb={2}>
          <Divider />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Box mb={2}>
              <Typography variant="subtitle1">Information</Typography>
            </Box>
            <Box mb={1}>
              <Typography>About Us</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Information</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Privacy Policy</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Terms and Conditions</Typography>
            </Box>
          </Box>
          <Box>
            <Box mb={2}>
              <Typography variant="subtitle1">Service</Typography>
            </Box>
            <Box mb={1}>
              <Typography>About Us</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Information</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Privacy Policy</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Terms and Conditions</Typography>
            </Box>
          </Box>
          <Box>
            <Box mb={2}>
              <Typography variant="subtitle1">Extras</Typography>
            </Box>
            <Box mb={1}>
              <Typography>About Us</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Information</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Privacy Policy</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Terms and Conditions</Typography>
            </Box>
          </Box>
          <Box>
            <Box mb={2}>
              <Typography variant="subtitle1">My Account</Typography>
            </Box>
            <Box mb={1}>
              <Typography>About Us</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Information</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Privacy Policy</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Terms and Conditions</Typography>
            </Box>
          </Box>
          <Box>
            <Box mb={2}>
              <Typography variant="subtitle1">Useful Links</Typography>
            </Box>
            <Box mb={1}>
              <Typography>About Us</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Information</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Privacy Policy</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Terms and Conditions</Typography>
            </Box>
          </Box>
          <Box>
            <Box mb={2}>
              <Typography variant="subtitle1">Our Offers</Typography>
            </Box>
            <Box mb={1}>
              <Typography>About Us</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Information</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Privacy Policy</Typography>
            </Box>
            <Box mb={1}>
              <Typography>Terms and Conditions</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={2} mb={2}>
        <Divider />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>© 2021 Lorem Ipsum is simply dummy text</Typography>
        <Box>
          <img src="/assets/images/Brands.svg" alt="" />
        </Box>
      </Box>
    </Box>
  );
}
