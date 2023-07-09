import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 100%;
  max-width: 200px;
  min-width: 200px;
  min-height: 800px;
  box-shadow: -6px 0px 15px 3px #787878;
  z-index: 19;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0px;
  transition: margin 1.5s;
  margin-left: ${({ isSidebarOpen }) => (!isSidebarOpen ? "-200px" : "")};
  a.active {
    background-color: #00c300;
    color: white;
    max-width: 100%;
  }
`;

export const SideBarHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  width: 100%;
  transition: margin 1.5s;
  margin-left: ${({ isSidebarOpen }) => (!isSidebarOpen ? "80px" : "")};
  z-index: 20;
`;

export const SidebarWrap = styled.div`
  width: 100%;
  max-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-top: 50px;
  border-top: 1px solid lightgray;
`;
export const ElementWrap = styled(NavLink)`
  width: 100%;
  max-width: 150px;
  min-height: 40px;
  padding-left: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  background-color: white;
  text-decoration: none;
  color: black;
  transition: color 0.8s, background-color 0.5s, max-width 1s;
  &:hover {
    color: #7bf77b;
    border-color: #7bf77b;
  }
`;
