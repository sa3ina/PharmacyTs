import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { border, borderBottom, width } from "@mui/system";
type Props = {};

const Login = (props: Props) => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  return (
    <div
      style={{
        marginTop: "200px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#3d405b" }}>Login</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <Field
              name="firstName"
              placeholder="Name"
              style={{
                border: "1px solid #edede9",
                borderRadius: "10px",
                height: "30px",
                width: "400px",
              }}
            />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field
              name="lastName"
              placeholder="Lastname"
              style={{
                border: "1px solid #edede9",
                borderRadius: "10px",
                height: "30px",
                width: "400px",
              }}
            />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field
              name="email"
              type="email"
              placeholder="Email"
              style={{
                border: "1px solid #edede9",
                borderRadius: "10px",
                height: "30px",
                width: "400px",
              }}
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button
              type="submit"
              style={{
                backgroundColor: "#3d405b",
                color: "white",
                borderRadius: "20px",
                padding: "10px 100px",
                cursor: "pointer",
                border: "none",
              }}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
