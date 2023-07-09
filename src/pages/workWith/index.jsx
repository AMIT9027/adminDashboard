import React, { useState } from "react";
import { Button, Input, Modal, Space, Upload } from "antd";
import TableList from "../../components/Table";
import {
  PlusCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { clientJson } from "../../json/workWith";
import { EmailInput, RegForm } from "../../styles/Dashboard/Modal";
import { Submit } from "../../styles/AddCourses";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clientSchema from "../../validation/client";
import { StyledForm } from "../../styles/WorkWith";

const WorkWith = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(clientJson.dataSource);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(clientSchema),
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    console.log(id);
    setData(clientJson.dataSource.filter((item) => item.id !== id));
  };

  const onSubmit = (d) => {
    console.log(d);
  };

  const Actions = [
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
      <TableList
        title="Client List"
        data={data}
        columns={clientJson.columns}
        actions={Actions}
        extra={
          <Button icon={<PlusCircleOutlined />} onClick={showModal}>
            Add Client
          </Button>
        }
      />
      <Modal
        title="Client details"
        open={isModalOpen}
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="image">Logo</label>
          <input type="file" {...register("image")} />
          <p>{errors.image?.message}</p>
          <label htmlFor="url">URL</label>
          <EmailInput {...register("url")} placeholder="Enter URL" />
          <p>{errors.url?.message}</p>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </StyledForm>
      </Modal>
    </>
  );
};

export default WorkWith;
