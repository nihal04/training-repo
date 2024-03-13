import './App.css';
import { Formik, Field, ErrorMessage, Form } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import * as yup from "yup";

function UserForm (props){
    return (
        <div>
            <div className="col-md-8 offset-md-2">
            <Formik initialValues={{
              description: "",
              amount: 0,
              date: "",
              expType: ""
            }}
            onSubmit={(values) => {
                console.log(values);
                  axios.post("http://localhost:3000/expense", values).then(res=>{
                    props.setRen(!props.ren);
                  })
              }}
              validationSchema={yup.object().shape({
                description: yup
                  .string()
                  .min(3, "Description is too short")
                  .max(10, "Description is too long")
                  .required("Description is required"),
                amount: yup
                  .number()
                  .min(1, "Minimum amount must be 1")
                  .required("Amount is required"),
                date: yup
                  .date()
                  .required("Date is required"),
                expType: yup
                  .string()
                  .required("Expense type is required"),
              })}>
            <Form>
              <div className="mt-2" style={{paddingLeft:"85px"}}>
                <Field className="inputField" name="description" placeholder="Enter Description"/>
                <ErrorMessage
                  name="description"
                  className="text-danger"
                  component="div"
                />
                <Field className="inputField" name="amount" placeholder="Enter Amount"/>
                <ErrorMessage
                  name="amount"
                  className="text-danger"
                  component="div"
                />
                <Field className="inputField" placeholderText="dd-mm-yyyy" type='date' name="date" style={{width:"64%"}}/>
                <ErrorMessage
                  name="date"
                  className="text-danger"
                  component="div"
                />
                <div role="group" aria-labelledby="my-radio-group" style={{paddingTop:"20px"}}>
                   <label style={{paddingRight:"20px", fontWeight:"500"}}>
                      <Field type="radio" name="expType" value="Income"/>
                      &nbsp; Income
                  </label>
                  <label style={{fontWeight:"500"}}>
                      <Field type="radio" name="expType" value="Expense" />
                      &nbsp; Expense
                  </label>
                </div>
                <ErrorMessage
                  name="expType"
                  className="text-danger"
                  component="div"
                />
              </div>
              <button className="btn btn-primary" style={{width:"53%", marginLeft:"80px", marginTop:"10px"}}>Add Transaction</button>
            </Form>
          </Formik>
        </div>
        </div>
    )
}

export default UserForm;