import { Card } from "antd";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  padding-inline: 20px;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  max-width: 400px;

  .ant-input {
    height: 40px;
  }

  .ant-btn {
    width: 100%;
    height: 40px;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 14px;
`;
