import { useState } from "react";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { IoSettingsOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import {
  Avatar,
  Button,
  Divider,
  Form,
  Layout,
  Menu,
  Modal,
  Select,
  Typography,
  theme,
} from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { locales } from "./i18n/i18n";
import { t } from "i18next";
import { Header } from "antd/es/layout/layout";
import Navbar from "./components/layout/navbar/Navbar";
const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Home = () => {
  const { i18n } = useTranslation();
  // console.log(locales[i18n.language]);
  const [selectedKey, setSelectedKey] = useState(
    localStorage.getItem("selectedKey") || "1"
  );

  const handleClick = (e) => {
    localStorage.setItem("selectedKey", e.key);

    setSelectedKey(e.key);
  };
  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const currentLanguage = i18n.language;
  const items = [
    getItem(
      <NavLink to="/dashboard">{t("Dashboard")}</NavLink>,
      "1",
      <PieChartOutlined />
    ),
    getItem(
      <NavLink to="/inventory">{t("Inventory")}</NavLink>,
      "2",
      <DesktopOutlined />
    ),
    getItem(t("Post clerk"), "sub1", <DesktopOutlined />, [
      getItem(
        <NavLink to="/transport/create-order">Tạo đơn hàng</NavLink>,
        "3"
      ),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),

    // getItem("Orders", "sub", <UserOutlined />, [
    //   getItem("Tom", "3"),
    //   getItem("Bill", "4"),
    //   getItem("Alex", "5"),
    // ]),
    getItem(t("Customer"), "sub2", <FileOutlined />, [
      getItem(<NavLink to="/create-customer">Tạo khách hàng</NavLink>, "6"),
      getItem(
        <NavLink to="/customer-detail">Thông tin khách hàng</NavLink>,
        "7"
      ),
    ]),
    getItem(t("Lãnh đạo"), "sub3", <GrUserManager />, [
      getItem(<NavLink to="boss/manage-sites">Quản lý kho</NavLink>, "8"),
      getItem(
        <NavLink to="boss/customer-detail">Thống kê hàng hóa</NavLink>,
        "9"
      ),
    ]),
    getItem(
      <button
        onClick={showModal}
        className="w-full text-left bg-transparent cursor-pointer"
      >
        {t("Settings")}
      </button>,
      "10",
      <IoSettingsOutline />
    ),
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Navbar />
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "sticky",
            left: 0,
            top: 64,
            padding: "8px 0",
            background: colorBgContainer,
          }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          breakpoint="sm"
          collapsedWidth="60"
        >
          <Menu
            className="overflow-y-auto"
            theme="light"
            defaultSelectedKeys={selectedKey}
            mode="inline"
            items={items}
            onClick={handleClick}
          />
        </Sider>
        <Layout
          style={{
            minHeight: "100vh",
            padding: "0 10px",
          }}
        >
          <Content
            style={{
              height: "100vh",
              // margin: "0 10px",
              marginTop: "64px",
            }}
          >
            <div
              style={{
                padding: 20,
                // minHeight: 720,
                background: colorBgContainer,
              }}
            >
              <Outlet />
              <Modal
                title="Settings"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form.Item label="Language">
                  <Select
                    defaultValue={currentLanguage}
                    style={{
                      width: 200,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        label: "English",
                        value: "en",
                      },
                      {
                        label: "Vietnamese",
                        value: "vi",
                      },
                    ]}
                  />
                </Form.Item>
              </Modal>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Home;
