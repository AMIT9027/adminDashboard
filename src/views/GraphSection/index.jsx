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
import { Button } from "antd";

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
          extra={<Button href="/order-list">View</Button>}
        />
        <GraphChart
          title={"Users Data Chart"}
          dayData={userstDayData}
          monthData={userstMonthData}
          yearData={userstYearData}
          extra={<Button href="/user-list">View</Button>}
        />
      </Wrapper>
    </Container>
  );
};
