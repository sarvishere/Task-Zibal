import { Outlet, useNavigate } from "react-router-dom";
import Button from "antd/lib/button";
import { Layout } from "antd";

const HomePage = () => {
  const navigate = useNavigate();
  const { Header } = Layout;
  return (
    <div>
      <Header
        style={{
          marginBottom: "30px",
          gap: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={() => navigate("/")} type="primary">
          Table
        </Button>

        <Button onClick={() => navigate("/form")} type="primary">
          Form
        </Button>
      </Header>

      <Outlet />
    </div>
  );
};

export default HomePage;
