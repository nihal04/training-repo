import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h1 className="text-center display-4" style={{fontWeight:"600"}}>Login</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              axios
                .post("http://localhost:9000/login", values)
                .then((res) => {
                  console.log(res);
                  localStorage.setItem("token", res.data.token);
                  localStorage.setItem("email", values.email);
                  navigate("/result");
                })
                .catch((err) => alert(err.response.data.message));
            }}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .required("Email is required")
                .email("Invalid email address"),
              password: yup.string().required("Password is required"),
            })}
          >
            <Form className="bg-dark-subtle shadow rounded p-4">
              <div className="form-group">
                <label htmlFor="email" style={{fontWeight:"600"}}>Email</label>
                <Field name="email" type="text" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-2 alert alert-danger"
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="password" style={{fontWeight:"600"}}>Password</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="mt-2 alert alert-danger"
                />
              </div>
              <div className="mt-2">
                <button className="btn btn-primary">Login</button>
              </div>
            </Form>
          </Formik>
          <div style={{marginTop:"20px", display:"flex"}}>
                <div style={{fontWeight:"600", fontSize:"17px"}}>New User?</div>
                &nbsp;&nbsp;<div style={{fontWeight:"600"}}><Link to="/register">Create an account</Link></div>
              </div>
        </div>
      </div>
    </div>
  );
}
