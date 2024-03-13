import Header from "./Header";
import ListView from "./ListView";
import ParentComponent from "./ParentComponent";
import TableView from "./TableView";
import TestComponent from "./TestComponent";

function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <TestComponent /> */}
      {/* <Header />
      <ListView />
      <TableView /> */}
    </div>
  );
}

export default App;
export { factorial };
