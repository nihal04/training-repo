import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { connect } from "react-redux";
import { deleteItem } from "./redux/actions";

function TodoItem(props) {
    function removeItem(id){
        props.deleteItem(id);
    }
  return (
    <div>
      <ListItem
        disablePadding
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={removeItem.bind(this, props.id)}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={props.text} />
        </ListItemButton>
      </ListItem>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

export default connect(mapStateToProps, { deleteItem })(TodoItem);
