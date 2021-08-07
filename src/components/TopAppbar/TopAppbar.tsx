import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./stylesheet";
import { Avatar, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CallIcon from "@material-ui/icons/Call";

export default function TopAppbar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Box padding="30px 30px 0px 100px" width="100%">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="85%"
            >
              <img src="/assets/images/mazadat-logo.png" alt="" />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <Box
                display="flex"
                justifyContent="space-between"
                width="400px"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.buttonCreate}
                  startIcon={<AddIcon />}
                >
                  CREATE POST
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.buttonMyCart}
                  startIcon={<img src="/assets/images/cart-icon.svg" alt="" />}
                >
                  MY CART
                </Button>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Box marginRight="3px">
                    <FavoriteBorderIcon />
                  </Box>
                  <Typography variant="body1">Watchlist</Typography>
                </Box>
                <Avatar alt="Remy Sharp" src="/assets/images/Avatar.png" />
              </Box>
            </Box>
            <Box marginY="13px" display="flex" width="85%">
              <Box display="flex" justifyContent="space-between" width="400px">
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="body1">Super Deals</Typography>
                  <Box marginLeft="3px">
                    <KeyboardArrowDownIcon />
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="body1">Feature Brands</Typography>
                  <Box marginLeft="3px">
                    <KeyboardArrowDownIcon />
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="body1">Collections</Typography>
                  <Box marginLeft="3px">
                    <KeyboardArrowDownIcon />
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="body1">Bestselling</Typography>
                  <Box marginLeft="3px">
                    <KeyboardArrowDownIcon />
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                width="450px"
                marginLeft="160px"
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Box marginRight="3px">
                    <CallIcon />
                  </Box>
                  <Typography variant="body1">Super Deals</Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="body1">080-97653890</Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="body1">Shipping</Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="body1">Blog</Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="body1">Company</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
