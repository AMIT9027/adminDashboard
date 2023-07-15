import { Card } from "antd";
import styled from "styled-components";
import login from "../../assets/images/login.jpg";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: url(${login});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: end;
  padding: 20px 50px 20px 20px;
  @media (max-width: 780px) {
    justify-content: baseline;
    padding: 10px;
  }
`;

export const StyledCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  overflow-x: hidden;

  .ant-row {
    display: block;
    width: 100%;
  }
  .ant-col {
    max-width: unset;
  }
  .ant-input {
    height: 40px;
  }

  .ant-btn {
    height: 40px;
    width: 150px;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 14px;
`;
