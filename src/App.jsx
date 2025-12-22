import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Write from "./pages/Write/Write";
import NotFound from "./pages/NotFound/NotFound";
import Read from "./pages/Read/Read";
import { Toaster } from "react-hot-toast";
import UpdateRead from "./pages/UpdateRead/UpdateRead";
import UpdateWrite from "./pages/UpdateWrite/UpdateWrite";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Write /> },
        { path: "/*", element: <NotFound /> },
        { path: "/read", element: <Read /> },
        { path: "/update", element: <UpdateRead /> },
        { path: "/updatewrite/:fruitId", element: <UpdateWrite /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster/>
    </>
  );
}

export default App;
