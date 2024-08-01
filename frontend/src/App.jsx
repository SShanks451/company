import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Profile from "./components/Profile";
import FeedPage from "./components/FeedPage";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import CustomerType from "./components/CustomerType";
import SocialHandles from "./components/SocialHandles";
import EditProfile from "./components/EditProfile";
import FlipWordsDemo from "./components/Landing";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <FlipWordsDemo />,
    },
    {
      path: "/signin",
      element: <SignInPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/feed",
      element: <FeedPage />,
    },
    {
      path: "/customertype",
      element: <CustomerType />,
    },
    {
      path: "/socialhandles",
      element: <SocialHandles />,
    },
    {
      path: "/editprofile",
      element: <EditProfile />,
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
