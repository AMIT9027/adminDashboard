import React, { useState } from "react";
import { Button, Card } from "antd";

import { orderData, userData } from "../../views/Tables/data";
import {
  Demographic,
  Designation,
  DetailSection,
  Follow,
  Name,
  OrderStyles,
  Profile,
  Status,
  TableWrap,
  UserStyles,
  ButtonWrapper,
} from "../../styles/Dashboard/TableAnalytics";
import { CardWrap } from "../../styles/Dashboard/TableAnalytics";
import { Link } from "react-router-dom";
import ModalSection from "../../components/Modal";

const TableAnalytics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <TableWrap>
      <ModalSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Card
        title="Users"
        extra={
          <ButtonWrapper>
            {" "}
            <Button href="/user-list">View</Button>
            <Button onClick={showModal}>Add</Button>
          </ButtonWrapper>
        }
        style={UserStyles}
      >
        <CardWrap>
          {userData.map((item) => (
            <Profile key={item.key}>
              <DetailSection>
                <img src={item.img} alt="profile" />
                <Demographic>
                  <Name>{item.name}</Name>
                  <Designation>{item.designation}</Designation>
                </Demographic>
              </DetailSection>
              <Button onClick={showModal}>Edit</Button>
            </Profile>
          ))}
        </CardWrap>
      </Card>

      <Card title="Orders" extra={<Button>View</Button>} style={OrderStyles}>
        <CardWrap>
          {orderData.map((item) => (
            <Profile key={item.key}>
              <DetailSection>
                <Demographic>
                  <Name>{item.order}</Name>
                  <Designation>
                    {item.orderCode} | {item.date}{" "}
                  </Designation>
                </Demographic>
              </DetailSection>
              <Status isUnpaid={item.isUnpaid}>
                {item.isUnpaid ? "Unpaid" : "Paid"}
              </Status>
            </Profile>
          ))}
        </CardWrap>
      </Card>
    </TableWrap>
  );
};
export default TableAnalytics;
