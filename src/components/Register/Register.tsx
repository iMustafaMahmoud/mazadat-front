import React from "react";
import { useFormik } from "formik";
import { validationSchema, initialValues } from "../../statics/signup-form";
import { SignUpForm } from "../../types/signup-form";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import "date-fns";
import makeStyles from "./stylesheet";

const Login = () => {
  const classes = makeStyles();

  const formik = useFormik<SignUpForm>({
    initialValues,
    validationSchema,
    onSubmit: () => {
      console.log(formik.values);
    },
  });

  return (
    <Box display="flex" justifyContent="center">
      <Box width="50%" padding="10%">
        <Box>
          <Typography variant="h1">
            <Box component="span" fontWeight={700}>
              Sign Up
            </Box>
          </Typography>
        </Box>
        <Box marginTop="15%">
          <Typography variant="subtitle2">
            <Box component="span" fontWeight={700} color="#2699fb">
              Username
            </Box>
          </Typography>
          <Box marginTop="2px">
            <TextField
              fullWidth
              className={classes.textInput}
              id="username"
              type="text"
              variant="outlined"
              value={formik.values.username}
              onBlur={(e) => {
                formik.handleBlur(e);
              }}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Box>
        </Box>
        <Box marginTop="7%">
          <Typography variant="subtitle2">
            <Box component="span" fontWeight={700} color="#2699fb">
              Password
            </Box>
          </Typography>
          <Box marginTop="2px">
            <TextField
              className={classes.textInput}
              fullWidth
              id="password"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onBlur={(e) => {
                formik.handleBlur(e);
              }}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>
        </Box>
        <Box marginTop="7%">
          <Typography variant="subtitle2">
            <Box component="span" fontWeight={700} color="#2699fb">
              Date of Birth
            </Box>
          </Typography>
          <Box marginTop="2px">
            <TextField
              className={classes.textInput}
              fullWidth
              id="dateOfBirth"
              type="date"
              variant="outlined"
              value={formik.values.dateOfBirth}
              onBlur={(e) => {
                formik.handleBlur(e);
              }}
              onChange={formik.handleChange}
              error={
                formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
              }
              helperText={
                formik.touched.dateOfBirth && formik.errors.dateOfBirth
              }
            />
          </Box>
        </Box>
        <Box marginTop="11%">
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            className={classes.loginButton}
            disabled={
              Boolean(formik.errors.password) ||
              Boolean(formik.errors.username) ||
              Boolean(formik.errors.dateOfBirth)
            }
          >
            <Typography variant="h5">Sign In</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
