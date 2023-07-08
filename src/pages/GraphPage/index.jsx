import React from "react";
import { GraphSection } from "../../views/GraphSection";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const GraphPage = () => {
  return (
    <>
      <Link to={"/"}>
        <Button icon={<ArrowLeftOutlined />}>Back</Button>
      </Link>
      <GraphSection />
    </>
  );
};

export default GraphPage;
