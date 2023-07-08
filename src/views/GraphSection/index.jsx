import React from "react";
import { StatsCards } from "../../components/StatsCards";
import GraphChart from "../../components/Graph";
import {
  userstDayData,
  userstMonthData,
  userstYearData,
  paymentstDayData,
  paymentstMonthData,
  paymentstYearData,
} from "./Data";
import { Container, Wrapper } from "../../styles/Graph/GraphSection";

export const GraphSection = () => {
  return (
    <Container>
      <StatsCards />
      <Wrapper>
        <GraphChart
          title={"Payments Data Chart"}
          dayData={paymentstDayData}
          monthData={paymentstMonthData}
          yearData={paymentstYearData}
        />
        <GraphChart
          title={"Users Data Chart"}
          dayData={userstDayData}
          monthData={userstMonthData}
          yearData={userstYearData}
        />
      </Wrapper>
    </Container>
  );
};
