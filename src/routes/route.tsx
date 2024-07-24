import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import HomePage from "../pages/home";
import Table from "../components/table";
import Form from "../components/form";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            index: true,
            element: <Table />,
          },
          {
            path: "form",
            element: <Form />,
          },
        ],
      },
    ],
  },
]);

export default router;
