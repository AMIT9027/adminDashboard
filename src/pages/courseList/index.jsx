import React from "react";
import TableList from "../../components/Table";
import { CourseJson } from "../../json/course";
import { Button, Space } from "antd";
import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";

const CourseList = () => {
  const Actions = [
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size={"middle"}>
          <Button icon={<EditOutlined />}>Update</Button>
          <Button icon={<DeleteOutlined />} danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <TableList
      title="Course List"
      data={CourseJson.dataSource}
      columns={CourseJson.columns}
      actions={Actions}
    />
  );
};

export default CourseList;
