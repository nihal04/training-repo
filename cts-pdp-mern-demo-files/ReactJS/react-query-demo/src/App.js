import Users from "./Users";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Products from "./Products";
import Posts from "./Posts";
import Comments from "./Comments";
import ErrorBoundary from "./ErrorBoundary";
const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      {/* <Users /> */}
      {/* <Products /> */}
      {/* <Posts /> */}
      <ErrorBoundary>
        <Comments />
      </ErrorBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
