import { Card, Table } from "antd";
import React from "react";
import { Container, DashboardWrap } from "../../styles/Dashboard";

const TableList = ({ title, data, columns, actions, extra }) => {
  return (
    <Container>
      <DashboardWrap>
        <Card title={title} extra={extra}>
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
