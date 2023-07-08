

import React from 'react'
import TableList from '../../components/Table'
import { VideoJson } from '../../json/video'
import { Button } from 'antd'
import {DeleteOutlined} from "@ant-design/icons"

const VideoList = () => {

    const Actions = [
        {
      title: "Action",
      key: "action",
      render: () => (
        <div>
          <Button icon={<DeleteOutlined style={{color:"red"}}/>}>Delete</Button>
        </div>
      ),
    },
    ]

  return (
    <TableList title="Video List" data={VideoJson.dataSource} columns={VideoJson.columns} actions={Actions} />
  )
}

export default VideoList