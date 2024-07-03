import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Profile from "./components/Profile";
import FeedPage from "./components/FeedPage";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";


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
    <Provider store={appStore}>
      <div className="w-[100%] min-h-screen bg-[#212121]">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
