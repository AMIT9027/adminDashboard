import React from "react";
import TableList from "../../components/Table";
import { orderJson } from "../../json/order";

const OrderList = () => {
  return (
    <TableList
      title="Orders"
      data={orderJson.dataSource}
      columns={orderJson.columns}
    />
  );
};

export default OrderList;
