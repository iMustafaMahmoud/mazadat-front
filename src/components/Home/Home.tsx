import React from "react";

import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import useStyles from "./stylesheet";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@material-ui/lab/Pagination";
import Footer from "../Footer/Footer";
import TopAppbar from "../TopAppbar/TopAppbar";

export default function Home() {
  const classes = useStyles();
  const [pageSize, setPageSize] = React.useState<string | number>(6);
  const [open, setOpen] = React.useState(false);

  const [pageNumber, setPageNumber] = React.useState(1);
  console.log(pageNumber);

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageNumber(value);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPageSize(event.target.value as number);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <TopAppbar />
      <Box display="flex" marginTop="50px">
        <Box width="35%">
          <Box className={classes.leftSideBox}>
            <Typography variant="body1">
              1-16 of over 2,000 results for "Laptop"
            </Typography>
          </Box>
        </Box>
        <Box width="50%">
          <Box>
            <img
              className={classes.banner}
              src="/assets/images/Banner.png"
              alt=""
            />
          </Box>
          <Box
            bgcolor="#F6F7F8"
            borderRadius="5px"
            padding="10px"
            marginTop="8px"
            height="60px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="450px"
            >
              <Typography>13 Items</Typography>
              <Typography>Sort By</Typography>
              <FormControl className={classes.formControl}>
                <Select
                  id="demo-controlled-open-select"
                  placeholder="Name"
                ></Select>
              </FormControl>
              <Typography>Show</Typography>
              <FormControl className={classes.formControl}>
                <Select
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={pageSize}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="60px"
            >
              <img src="/assets/images/icon.svg" alt="" />
              <img src="/assets/images/icon-1.svg" alt="" />
            </Box>
          </Box>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <Box mt={2}>
            <Pagination
              page={pageNumber}
              onChange={handlePaginationChange}
              count={6}
              variant="outlined"
              shape="rounded"
              size="large"
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
