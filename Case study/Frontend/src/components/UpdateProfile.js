import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UpdateProfile() {
    const navigate = useNavigate();
    const profileData = useSelector((state)=> state.app.profileData);
  const formik = useFormik({
    initialValues: {
      firstname: profileData.firstname,
      lastname: profileData.lastname,
      email: profileData.email,
      age: profileData.age,
      phonenumber: profileData.phonenumber,
      password: profileData.password,
    },
    onSubmit: async (values) => {
      await axios.put("http://localhost:9000/movie/updateuser", values)
      .then((res)=>{
        alert("Profile updated successfully")
        navigate("/profile");
      })
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
      age: yup
        .number()
        .required("Age cannot be blank"),
      phonenumber: yup
        .string()
        .max(10, "Phone number cannot exceed more than 10 digit")
        .required("Phone number cannot be left blank"),
    //   password: yup
    //     .string()
    //     .min(6, "Password is too short")
    //     .max(15, "Password can have maximum 15 characters only")
    //     .required("Password cannot be left blank"),
    }),
  });
  return (
    <div className="container bg-dark-subtle shadow rounded p-4">
        <h1 className="text-center">Update Profile</h1>
      <div className="row form-group">
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
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phonenumber}
                name="phonenumber"
              />
              {formik.errors.phonenumber && formik.touched.phonenumber ? (
                <span className="text-danger">{formik.errors.phonenumber}</span>
              ) : null}
            </div>
            {/* <div className="mt-2">
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
            </div> */}
            <div className="mt-2">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
          <div style={{marginTop:"20px", display:"flex"}}>
                <div style={{fontWeight:"600"}}><Link to="/profile">Back to Profile</Link></div>
        </div>
        </div>
      </div>
    </div>
  );
}