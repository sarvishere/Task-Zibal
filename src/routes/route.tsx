import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import HomePage from "../pages/home";
import Form from "../components/form";
import TableSection from "../components/Table/table";

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
            element: <TableSection />,
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
