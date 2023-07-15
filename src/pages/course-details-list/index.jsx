import React, { useState } from "react";
import TableList from "../../components/Table";
import CourseDetails from "../../components/CourseDetails";
import { Button, Space } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { courseDetailsJson } from "../../json/course-details";

const CourseDetailsList = () => {
  const [data, setData] = useState(courseDetailsJson.dataSource);
  const [isModalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const actions = [
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size={"middle"}>
          <Button icon={<EditOutlined />} onClick={showModal}>
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            danger
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleDelete = (id) => {
    setData(courseDetailsJson.dataSource.filter((item) => item.id !== id));
  };

  return (
    <>
      <TableList
        title="Course Detail List"
        data={data}
        columns={courseDetailsJson.columns}
        actions={actions}
        extra={
          <Button icon={<PlusCircleOutlined />} href="/course">
            Add Details
          </Button>
        }
      />
      {isModalOpen && (
        <CourseDetails
          isModalOpen={isModalOpen}
          setIsModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default CourseDetailsList;
