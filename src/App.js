import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./infrastructure/Root";
import { UserContextProvider } from "./services/UserContext/UserContextProvider";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

function App() {
  return (
    
    <UserContextProvider>
      <RouterProvider router={router} />;
    </UserContextProvider>
  );
}

export default App;
