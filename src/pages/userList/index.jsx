import React, { useState } from "react";
import TableList from "../../components/Table";
import { UserJson } from "../../json/user";
import { Button, Space, Switch } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import ModalSection from "../../components/Modal";
const UserList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(UserJson.dataSource);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    console.log(id);
    setData(UserJson.dataSource.filter((item) => item.id !== id));
  };

  const Actions = [
    {
      title: "Mentor",
      key: "mentor",
      render: () => (
        <>
          <Switch defaultChecked />
        </>
      ),
    },
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

  return (
    <>
      <ModalSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <TableList
        title="Users"
        data={data}
        columns={UserJson.columns}
        actions={Actions}
        extra={
          <Button icon={<PlusCircleOutlined />} onClick={showModal}>
            Add User
          </Button>
        }
      />
    </>
  );
};

export default UserList;
