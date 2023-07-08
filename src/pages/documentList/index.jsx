

import React from 'react'
import TableList from '../../components/Table'
import { DocumentsJson } from '../../json/document'

const DocumentList = () => {
 
  return (
    <TableList title="Document List" data={DocumentsJson.dataSource} columns={DocumentsJson.columns} />
  )
}

export default DocumentList