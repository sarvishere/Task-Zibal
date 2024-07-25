import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import HomePage from "../pages/home";

import TableSection from "../components/Table/table";
import CreateForm from "../components/Form/form";

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
            element: <CreateForm />,
          },
        ],
      },
    ],
  },
]);

export default router;
