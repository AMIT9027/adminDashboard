import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1350px;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const Card = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 8px;
  overflow: hidden;
  min-height: 150px;
`;

export const IncomeCard = styled(Card)`
  background-image: linear-gradient(to right, #4fd1c9, #38b2ac);
`;

export const UsersCard = styled(Card)`
  background-image: linear-gradient(to right, #60a5fa, #3b82f6);
`;

export const Amount = styled.div`
  position: relative;
  margin-bottom: 10px;
  color: #000;
  font-size: 40px;
  font-weight: 600;
  line-height: 1;
`;

export const Label = styled.div`
  position: relative;
  color: rgba(0, 0, 0, 0.8);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
`;

export const Icon = styled.svg`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
  margin-right: -20px;
  margin-bottom: -20px;
  color: rgba(0, 0, 0, 0.5);
`;
