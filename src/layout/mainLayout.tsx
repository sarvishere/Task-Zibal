import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div dir="rtl">
      <Outlet />
    </div>
  );
};

export default MainLayout;
