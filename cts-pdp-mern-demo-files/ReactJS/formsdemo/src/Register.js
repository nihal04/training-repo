import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      age: 0,
    },
    onSubmit: async (values) => {
        
      await axios.post("http://localhost:3001/users", values);
      
    },
    validationSchema: yup.object().shape({
      firstname: yup
        .string()
        .min(3, "First name is too short")
        .max(10, "First name is too long")
        .required("First name cannot be left blank"),
      lastname: yup
        .string()
        .min(3, "Last name is too short")
        .max(10, "Last name is too long")
        .required("Last name cannot be left blank"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email cannot be left blank"),
      password: yup
        .string()
        .min(6, "Password is too short")
        .max(15, "Password can have maximum 15 characters only")
        .required("Password cannot be left blank"),
      age: yup.number().required("Age cannot be left blank"),
    }),
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-2">
              <input
                type="text"
                value={formik.values.firstname}
                className="form-control"
                placeholder="First Name"
                name="firstname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.firstname && formik.touched.firstname ? (
                <span className="text-danger">{formik.errors.firstname}</span>
              ) : null}
            </div>
            <div className="mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
                name="lastname"
              />
              {formik.errors.lastname && formik.touched.lastname ? (
                <span className="text-danger">{formik.errors.lastname}</span>
              ) : null}
            </div>
            <div className="mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name="email"
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="text-danger">{formik.errors.email}</span>
              ) : null}
            </div>
            <div className="mt-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                name="password"
              />
              {formik.errors.password && formik.touched.password ? (
                <span className="text-danger">{formik.errors.password}</span>
              ) : null}
            </div>
            <div className="mt-2">
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
                name="age"
              />
              {formik.errors.age && formik.touched.age ? (
                <span className="text-danger">{formik.errors.age}</span>
              ) : null}
            </div>
            <div className="mt-2">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
