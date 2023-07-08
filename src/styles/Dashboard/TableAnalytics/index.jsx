// import { StatusProps } from "Interfaces/Styles/Dashboard/TableAnalytics";
import styled from "styled-components";

export const TableWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const UserStyles = {
  flex: 1,
};

export const OrderStyles = {
  flex: 1,
};

export const CardWrap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DetailSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Follow = styled.a`
  padding: 5px 10px;
  background: transparent;
  border: 1px solid #e69222;
  border-radius: 7px;
  text-decoration: none;
  color: #e69222;
  width: 100%;
  max-width: 60px;
  text-align: center;

  &:hover {
    background: #e69222;
    color: white;
  }
`;

export const Status = styled(Follow)`
  border: none;
  background-color: ${(props) => (props.isUnpaid ? "red" : "skyblue")};
  color: white;

  &:hover {
    background-color: ${(props) => (props.isUnpaid ? "red" : "skyblue")};
    color: white;
  }
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Demographic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Name = styled.p`
  font: normal normal 600 15px "Lexend", sans-serif;
`;
export const Designation = styled.p`
  font: normal normal 400 13px "Lexend", sans-serif;
  color: gray;
`;

export const Button = styled.button`
  font: normal normal 400 13px "Lexend", sans-serif;
  color: gray;
  height: 100%;
  min-height: 30px;
  width: 100%;
  min-width: 70px;
  padding: 5px 10px;
  background: transparent;
  border: 1px solid #e69222;
  border-radius: 7px;
  text-decoration: none;
  color: #e69222;

  &:hover {
    background: #e69222;
    color: white;
  }
`;

export const ButtonWrapper = styled.div`
  font: normal normal 400 13px "Lexend", sans-serif;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;
  width: 100%;
  min-width: 160px;
`;