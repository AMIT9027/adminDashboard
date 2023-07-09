import React from "react";
import { GraphSection } from "../../views/GraphSection";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Container, DashboardWrap } from "../../styles/Dashboard";

const GraphPage = () => {
  return (
    <Container>
      <DashboardWrap>
        <Card title="Metrics">
          <Link to={"/"}>
            <Button icon={<ArrowLeftOutlined />}>Back</Button>
          </Link>
          <GraphSection />
        </Card>
      </DashboardWrap>
    </Container>
  );
};

export default GraphPage;
