// import axios from "axios";
// import redux from "redux";
// import { combineReducers } from "redux";
// import { applyMiddleware } from "redux";
// import reduxLogger from "redux-logger";
// import thunkMiddleware from "redux-thunk";
const axios = require("axios");
const redux = require("redux");
const {combineReducers} = require("redux");
const {applyMiddleware} = require("redux");
const reduxLogger = require("redux-logger");
const thunkMiddleware = require("redux-thunk").default;
const logger = reduxLogger.createLogger();

// Create state object
const state = { todos: [] };

// Action Types
const ADD = "ADD";
const REMOVE = "REMOVE";
const MARK_TODO = "MARK_TODO";
const GET = "GET";
const GET_ALL = "GET_ALL";

// Action Creator Functions

function addTodo(todo) {
  return {
    type: ADD,
    payload: todo,
  };
}

function removeTodo(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}

function markTodo(id) {
  return {
    type: MARK_TODO,
    payload: id,
  };
}

function getTodos(todos) {
  return {
    type: GET_ALL,
    payload: todos,
  };
}

function getTodo(id) {
  return {
    type: GET,
    payload: id,
  };
}

function fetchTodos() {
  return function (dispatch) {
    axios
      .get("https://dummyjson.com/todos?limit=5")
      .then((res) => dispatch(getTodos(res.data.todos)));
  };
}

// Create reducer function
function reducer(initialState = state, action) {
  switch (action.type) {
    case ADD: {
      return {
        ...initialState,
        todos: [...initialState.todos, action.payload],
      };
    }
    case GET_ALL: {
      return {
        ...initialState,
        todos: action.payload,
      };
    }
    case REMOVE: {
      return {
        ...initialState,
        todos: [...initialState.todos.filter((x) => x.id != action.payload)],
      };
    }
    default: {
      return initialState;
    }
  }
}

// function reducer2(initialState = state, action) {
//   switch (action.type) {
//     case REMOVE: {
//       return {
//         ...initialState,
//         todos: [...initialState.todos.filter((x) => x.id != action.payload)],
//       };
//     }
//     default:{
//         return initialState;
//     }

//   }
// }

// Combining 2 reducers here
// const mainReducer = combineReducers({
//   reducer,
//   reducer2,
// });

// Create Store
const store = redux.legacy_createStore(reducer, applyMiddleware(logger, thunkMiddleware));

// Subscribe for actions
// store.subscribe(() => console.log(store.getState()));

// Dispatch an action
// store.dispatch(addTodo({ id: 1, text: "Meeting at 9 AM", isCompleted: false }));
// store.dispatch(addTodo({ id: 2, text: "Pay Bills", isCompleted: false }));

// store.dispatch(removeTodo(2));

store.dispatch(fetchTodos());
