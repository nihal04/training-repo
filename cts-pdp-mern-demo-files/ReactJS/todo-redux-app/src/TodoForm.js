import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import { addItem } from "./redux/actions";
import { v1 as uuidv1 } from "uuid";

function TodoForm(props) {
  const [item, setItem] = React.useState("");
  function AddItem() {
    const newItem = {
        id: uuidv1(),
        text: item
    }
    props.addItem(newItem);
  }
  return (
    <div className="mt-2">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            id="standard-basic"
            label="Enter some text"
            variant="standard"
            fullWidth
            onChange={(e) => setItem(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={AddItem}>
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

export default connect(mapStateToProps, { addItem })(TodoForm);
