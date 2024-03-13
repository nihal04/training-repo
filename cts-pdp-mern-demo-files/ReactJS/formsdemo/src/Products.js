import React from "react";
import { Formik, Field, ErrorMessage, Form, FieldArray } from "formik";
import axios from "axios";
import * as yup from "yup";
export default function Products() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <Formik
            initialValues={{
              productname: "",
              brand: "",
              quantity: 0,
              price: 0,
              active: false,
              favourites: []
            }}
            onSubmit={(values) => {
                axios.post("http://localhost:3001/products", values)
            }}
            validationSchema={yup.object().shape({
              productname: yup
                .string()
                .min(3, "Product name is too short")
                .max(10, "Product name is too long")
                .required("Product name is required"),
              brand: yup
                .string()
                .min(3, "Brand name is too short")
                .max(10, "Brand name is too long")
                .required("Brand is required"),
              quantity: yup
                .number()
                .min(1, "Minimum quantity must be 1")
                .max(10, "Maximum quantity must be 10")
                .required("Quantity is required"),
              price: yup
                .number()
                .min(1, "Minimum price must be 1")
                .required("Price is required"),
            })}
          >
            <Form>
              <div className="mt-2">
                <Field className="form-control" name="productname" placeholder="Product Name"/>
                <ErrorMessage
                  name="productname"
                  className="text-danger"
                  component="div"
                />
              </div>
              <div className="mt-2">
                <Field name="active" type="checkbox"/>
              </div>
              <div className="mt-2">
                <Field name="favourites" as="select" multiple>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </Field>
              </div>
              <div className="mt-2">
                <Field className="form-control" name="brand" placeholder="Brand Name" />
                <ErrorMessage
                  name="brand"
                  className="text-danger"
                  component="div"
                />
              </div>
              <div className="mt-2">
                <Field className="form-control" name="quantity" placeholder="Quantity" />
                <ErrorMessage
                  name="quantity"
                  className="text-danger"
                  component="div"
                />
              </div>
              <div className="mt-2">
                <Field className="form-control" name="price" placeholder="Price" />
                <ErrorMessage
                  name="price"
                  className="text-danger"
                  component="div"
                />
              </div>
              <button className="btn btn-primary">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
