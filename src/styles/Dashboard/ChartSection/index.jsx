import styled from "styled-components";

export const GraphSection = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;

  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

export const ChartWrap = styled.div`
  width: 100%;
  height: 300px;
`;

export const GraphCardStyles = {
  flex: 2.5,
  width: "100%",
  height: "100%",
};

export const NotificationCardStyles = {
  flex: 1.5,
  width: "100%",
  height: "100%",
};

export const NotificationWrap = styled.div`
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

export const NotificationIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e69222;
  color: white;
  border-radius: 7px;
  display: grid;
  place-items: center;

  .anticon {
    font-size: 20px;
  }
`;

export const CloseStyles = {
  color: "grey",
  cursor: "pointer",
};
