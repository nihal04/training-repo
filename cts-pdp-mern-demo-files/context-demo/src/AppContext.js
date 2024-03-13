import React from "react";

const context = React.createContext();

const Provider = context.Provider;
const Consumer = context.Consumer;

export default context;
export { Provider, Consumer };
