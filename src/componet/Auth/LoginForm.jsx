import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../State/Authentication/Action";

const initialValues = {
  email: "",
  Password: "",
};
export const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    dispatch(loginUser({userData:values,navigate}))
  }
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Đăng nhập hệ thống
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="Mật khẩu"
            type="Password"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Button
            sx={{ mt: 2, padding: "1rem" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Đăng nhập
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Bạn chưa có tài khoản?
        <Button size="small" onClick={() => navigate("/account/register")}>
          Đăng ký
        </Button>
      </Typography>
    </div>
  );
};
