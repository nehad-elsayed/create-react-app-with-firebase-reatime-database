import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Write from "./pages/Write/Write";
import NotFound from "./pages/NotFound/NotFound";
import Read from "./pages/Read/Read";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Write /> },
        { path: "/*", element: <NotFound /> },
        { path: "/read", element: <Read /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
