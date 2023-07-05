import { useState } from "react";
import { Card, Progress, Skeleton } from "antd";
import {
  BottomInfo,
  CardStyles,
  CardWrap,
  Count,
  SubTitle,
  Title,
  TitleSection,
  TopInfo,
} from "../../styles/Dashboard/AnalyticsCard";

const AnalyticsCard = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Card style={CardStyles}>
      <Skeleton loading={loading} active>
        <CardWrap>
          <TopInfo>
            <TitleSection>
              {" "}
              <Title>Total Frofit</Title>
              <SubTitle>All Customs Value</SubTitle>
            </TitleSection>
            <Count>$18M</Count>
          </TopInfo>
          <Progress percent={50} status="active" />
          <BottomInfo>
            <SubTitle>Change</SubTitle>
            <SubTitle>50%</SubTitle>
          </BottomInfo>
        </CardWrap>
      </Skeleton>
    </Card>
  );
};

export default AnalyticsCard;
