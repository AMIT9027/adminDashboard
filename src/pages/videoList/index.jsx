import React, { useState } from "react";
import TableList from "../../components/Table";
import { VideoJson } from "../../json/video";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const VideoList = () => {
  const [data, setData] = useState(VideoJson.dataSource);

  const handleDelete = (id) => {
    console.log(id);
    setData(VideoJson.dataSource.filter((item) => item.id !== id));
  };

  const Actions = [
    {
      title: "Action",
      key: "action",
      render: (_, render) => (
        <div>
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(render.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <TableList
      title="Video List"
      data={data}
      columns={VideoJson.columns}
      actions={Actions}
    />
  );
};

export default VideoList;
