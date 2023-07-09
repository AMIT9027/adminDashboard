import { CloseCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartWrap,
  CloseStyles,
  GraphCardStyles,
  GraphSection,
  NotificationCardStyles,
  NotificationIcon,
  NotificationWrap,
} from "../../styles/Dashboard/ChartSection";
import {
  Demographic,
  DetailSection,
  Name,
  Profile,
} from "../../styles/Dashboard/TableAnalytics";

const ChartSection = () => {
  const data = [
    {
      name: "January",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "February",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "March",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April ",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May ",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June ",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <GraphSection>
      <Card
        title="History"
        extra={<Button href="/metrics">View</Button>}
        style={GraphCardStyles}
      >
        <ChartWrap>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                style={{
                  fontSize: "0.8rem",
                }}
              />
              <YAxis
                style={{
                  fontSize: "0.8rem",
                }}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="green"
                fill="lightGreen"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartWrap>
      </Card>
      <Card title="Notifications" style={NotificationCardStyles}>
        <NotificationWrap>
          <Profile>
            <DetailSection>
              <NotificationIcon>
                <ShoppingCartOutlined />
              </NotificationIcon>
              <Demographic>
                <Name>Amit Shah</Name>
              </Demographic>
            </DetailSection>
            <CloseCircleOutlined style={CloseStyles} />
          </Profile>
          <Profile>
            <DetailSection>
              <NotificationIcon>
                <ShoppingCartOutlined />
              </NotificationIcon>
              <Demographic>
                <Name>Amit Shah</Name>
              </Demographic>
            </DetailSection>
            <CloseCircleOutlined style={CloseStyles} />
          </Profile>
          <Profile>
            <DetailSection>
              <NotificationIcon>
                <ShoppingCartOutlined />
              </NotificationIcon>
              <Demographic>
                <Name>Amit Shah</Name>
              </Demographic>
            </DetailSection>
            <CloseCircleOutlined style={CloseStyles} />
          </Profile>
          <Profile>
            <DetailSection>
              <NotificationIcon>
                <ShoppingCartOutlined />
              </NotificationIcon>
              <Demographic>
                <Name>Amit Shah</Name>
              </Demographic>
            </DetailSection>
            <CloseCircleOutlined style={CloseStyles} />
          </Profile>
          <Profile>
            <DetailSection>
              <NotificationIcon>
                <ShoppingCartOutlined />
              </NotificationIcon>
              <Demographic>
                <Name>Amit Shah</Name>
              </Demographic>
            </DetailSection>
            <CloseCircleOutlined style={CloseStyles} />
          </Profile>
          <Profile>
            <DetailSection>
              <NotificationIcon>
                <ShoppingCartOutlined />
              </NotificationIcon>
              <Demographic>
                <Name>Amit Shah</Name>
              </Demographic>
            </DetailSection>
            <CloseCircleOutlined style={CloseStyles} />
          </Profile>
          <Profile>
            <DetailSection>
              <NotificationIcon>
                <ShoppingCartOutlined />
              </NotificationIcon>
              <Demographic>
                <Name>Amit Shah</Name>
              </Demographic>
            </DetailSection>
            <CloseCircleOutlined style={CloseStyles} />
          </Profile>
        </NotificationWrap>
      </Card>
    </GraphSection>
  );
};

export default ChartSection;
