import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Button } from "reactstrap";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          className="text-right"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          <Menu.Item key="1">صفحه اصلی</Menu.Item>
          <Menu.Item key="2">لیست پست ها</Menu.Item>
          
            <Button className="login-btn" color="primary" type="submit">
              صفحه ورود
            </Button>
          
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb className="text-right" style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content text-right">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        @ساخته شده توسط Sm.S1382
      </Footer>
    </Layout>
  );
};

export default MainLayout;
