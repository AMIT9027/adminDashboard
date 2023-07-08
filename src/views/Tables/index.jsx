<<<<<<< HEAD
=======
import React, {useState} from "react"
>>>>>>> 865cbc288d66617cabb6946845bd9c49629eba5a
import { Card } from "antd";
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
<<<<<<< HEAD
} from "../../styles/Dashboard/TableAnalytics";
import { CardWrap } from "../../styles/Dashboard/TableAnalytics";

const TableAnalytics = () => {
  return (
    <TableWrap>
      <Card title="New Users" style={UserStyles}>
=======
  Button,
  ButtonWrapper
} from "../../styles/Dashboard/TableAnalytics";
import { CardWrap } from "../../styles/Dashboard/TableAnalytics";


const TableAnalytics = () => {
  const [clicked , setClick] = useState(0);
  const handleClick =()=>{
    setClick(!clicked)
    return clicked
  }



 
  return (
    <TableWrap>
      <Card title="New Users" extra={ <ButtonWrapper> <Button onClick={handleClick}>View</Button> <Button>Add</Button></ButtonWrapper>} style={UserStyles}>
>>>>>>> 865cbc288d66617cabb6946845bd9c49629eba5a
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
<<<<<<< HEAD
              <Follow>Follow</Follow>
=======
              <Follow>Edit</Follow>
>>>>>>> 865cbc288d66617cabb6946845bd9c49629eba5a
            </Profile>
          ))}
        </CardWrap>
      </Card>
<<<<<<< HEAD
      <Card title="Orders" style={OrderStyles}>
=======
      <Card title="Orders"  extra={<Button>View</Button> } style={OrderStyles}>
>>>>>>> 865cbc288d66617cabb6946845bd9c49629eba5a
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
