import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import TableList from "../../components/Table";
import { faqJson } from "../../json/faq";

const FaqList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(faqJson.dataSource);
  }, []);

  const handleDelete = (id) => {
    console.log(faqJson.dataSource.filter((item) => item.id !== id));
    setData(faqJson.dataSource.filter((item) => item.id !== id));
  };

  const Actions = [
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <Space size={"middle"}>
          <Button icon={<EditOutlined />} href="/course">
            Update
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(item.id)}
            danger
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <TableList
      title="Faq List"
      data={data}
      columns={faqJson.columns}
      actions={Actions}
      extra={
        <Button icon={<PlusCircleOutlined />} href="/course">
          Add Faq
        </Button>
      }
    />
  );
};

export default FaqList;
