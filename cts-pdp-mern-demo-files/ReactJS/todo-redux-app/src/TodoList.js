import React from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { getItems } from "./redux/actions";

function TodoList(props) {
  React.useEffect(() => {
    props.getItems();
  }, []);

  return (
    <div>
      <List>
        {
            props.todoList.map(item => <TodoItem key={item.id} id={item.id} text={item.text} />)
        }
      </List>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

export default connect(mapStateToProps, {getItems})(TodoList);
