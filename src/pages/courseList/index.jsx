import React, { useEffect, useState } from "react";
import TableList from "../../components/Table";
import { CourseJson } from "../../json/course";
import { Button, Space } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const CourseList = () => {
  const [data, setData] = useState(CourseJson.dataSource);

  const handleDelete = (id) => {
    console.log(CourseJson.dataSource.filter((item) => item.id !== id));
    setData(CourseJson.dataSource.filter((item) => item.id !== id));
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
      title="Course List"
      data={data}
      columns={CourseJson.columns}
      actions={Actions}
      extra={
        <Button icon={<PlusCircleOutlined />} href="/course">
          Add Course
        </Button>
      }
    />
  );
};

export default CourseList;
