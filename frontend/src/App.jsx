import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Profile from "./components/Profile";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/signin",
      element: <SignInPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/",
      element: <Profile />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
