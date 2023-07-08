import React from "react";
import AnalyticsCard from "../../components/AnalyticsCard";
import { CardSection } from "../../styles/Dashboard/Analytics";

const Analytics = () => (
  <CardSection>
    <AnalyticsCard title="Total Profit" path="/metrics" />
    <AnalyticsCard title="Total User" path="/user-list" />
    <AnalyticsCard title="Total Courses" path="/course-list" />
    <AnalyticsCard title="Total Videos" path="/video-list" />
  </CardSection>
);

export default Analytics;
