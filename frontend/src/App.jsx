import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Profile from "./components/Profile";
import FeedPage from "./components/FeedPage";

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
    {
      path: "/feed",
      element: <FeedPage />,
    },
  ]);

  return (
    <div className="w-[100%] h-screen bg-[#212121]">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
