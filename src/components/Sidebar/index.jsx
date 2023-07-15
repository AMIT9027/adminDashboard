import React, { useEffect, useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
// import { StyledButton } from "antd";
import { Button } from "antd";
import {
  ElementWrap,
  SideBarHeader,
  SidebarContainer,
  SidebarWrap,
} from "../../styles/Sidebar";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <SideBarHeader isSidebarOpen={isSidebarOpen}>
        <Button
          icon={isSidebarOpen ? <ArrowLeftOutlined /> : <ArrowRightOutlined />}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        />
      </SideBarHeader>
      <SidebarWrap>
        <ElementWrap to={"/"}>Dashboard</ElementWrap>
        <ElementWrap to={"/video-list"}>Videos</ElementWrap>
        <ElementWrap to={"/course-list"}>Courses</ElementWrap>
        <ElementWrap to={"/course-detail-list"}>Course Detail</ElementWrap>
        <ElementWrap to={"/document-list"}>Documents </ElementWrap>
        <ElementWrap to={"/user-list"}>Users</ElementWrap>
      </SidebarWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
