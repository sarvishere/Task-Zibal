import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "antd/lib/button";
import { Layout } from "antd";

const HomePage = () => {
  const navigate = useNavigate();
  const { Header, Content } = Layout;
  return (
    <>
      <Header
        style={{
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
    </>
  );
};

export default HomePage;
