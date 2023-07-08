import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1350px;
  justify-content: center;
  gap: 20px;
  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;
