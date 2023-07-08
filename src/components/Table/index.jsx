import { Button, Card, Table } from "antd";
import React from "react";
import { Container, DashboardWrap } from "../../styles/Dashboard";
import {ArrowLeftOutlined} from "@ant-design/icons"
import { Link } from "react-router-dom";
const TableList = ({ title, data, columns, actions ,extra }) => {
  return (
    <Container>
        
      <DashboardWrap >
        <Link to={"/"}>
            <Button icon={<ArrowLeftOutlined />} >Back</Button>
        </Link>
        <Card title={title} extra={extra} >
          <Table
            dataSource={data}
            columns={actions ? columns.concat(actions) : columns}
            pagination
          />
        </Card>
      </DashboardWrap>
    </Container>
  );
};

export default TableList;
